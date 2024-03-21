import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Socket } from 'socket.io-client';

let mediaRecorder: MediaRecorder | null = null;

export const useVoice = (socket: MutableRefObject<Socket>, setMessages: Dispatch<SetStateAction<Message[]>>) => {

    const [voiceMode, setVoiceMode] = useState(false);
    
    const handleVoice = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        if (e.type === 'mousedown') {
            startRecording();
        } else {
            stopRecording();
        }
    };

    const startRecording = () => {
        toast.success('Recording started');
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder = new MediaRecorder(stream);

                mediaRecorder.addEventListener("dataavailable", event => {

                    convertToLinear16(event.data)
                    .then(({ linear16Array, sampleRateHertz }) => {
                        socket.current.emit('audio-stream', {audio: linear16Array, sampleRateHertz});
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        toast.error('An error occurred while processing your request');
                    });
                });

                mediaRecorder.start();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const stopRecording = () => {
        toast.success('Recording stopped');
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
    };

    const convertToLinear16 = async (wavBlob: Blob): Promise<{ linear16Array: Int16Array, sampleRateHertz: number }> => {
        const audioContext = new (window.AudioContext || window.AudioContext)();
        const fileReader = new FileReader();
        
        // Read the blob as an ArrayBuffer
        fileReader.readAsArrayBuffer(wavBlob);

        return new Promise((resolve, reject) => {
            fileReader.onload = async () => {
                try {
                    const arrayBuffer = fileReader.result as ArrayBuffer;
                    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
                    const sampleRateHertz = audioBuffer.sampleRate;
                    const pcmBuffer = audioBuffer.getChannelData(0); // Get the PCM data

                    // Convert PCM data to Int16 (LINEAR16)
                    const linear16Array = new Int16Array(pcmBuffer.length);
                    for (let i = 0; i < pcmBuffer.length; i++) {
                        linear16Array[i] = pcmBuffer[i] * 0x7FFF; // Convert to Int16 range
                    }

                    resolve({linear16Array, sampleRateHertz});
                } catch (error) {
                    reject(error);
                }
            };

            fileReader.onerror = (error) => {
                reject(error);
            };

        });
    };

    return { handleVoice, voiceMode, setVoiceMode };

};