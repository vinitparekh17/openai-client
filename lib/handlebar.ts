import { compile } from 'handlebars';

const source = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transcript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .transcript-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
        }
        .message {
            margin-bottom: 20px;
        }
        .message .prompt {
            font-weight: bold;
        }
        .message .answer {
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <div class="transcript-container">
        <h2>Transcript for {{ user.name }}</h2>
        <p><strong>ID:</strong> {{ user.id }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Profile:</strong> {{ user.profile }}</p>
        <hr>
        <h3>Messages</h3>
        {{#each messages}}
            <div class="message">
                <p class="prompt">{{ prompt }}</p>
                <p class="answer">{{ answer }}</p>
                <p><strong>Date:</strong> {{ date }}</p>
            </div>
        {{/each}}
    </div>
</body>
</html>`;

export const GenerateTransript = (data: TranscriptFormat) : string => {
    return compile(source)(data)
}