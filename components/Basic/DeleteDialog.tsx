import { Modal } from '@nextui-org/react';
import { deleteAccount } from '../../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentAuthState } from '../../slices/authSlice';
import { useRouter } from 'next/router';

export default function DeleteDialog({ deleteDialog, setDeleteDialog }: DeleteDialogProps) {

    const { user } = useSelector(CurrentAuthState) as { user: UserData };
    const router = useRouter()
    const dispatch = useDispatch()

    return (
        <Modal
            closeButton
            open={deleteDialog}
            animated
            onClose={() => setDeleteDialog(false)}
            aria-labelledby="modal-title"
        >
            <Modal.Header>
                <h2 id="modal-title" className="text-lg font-semibold">
                    Delete Account
                </h2>
            </Modal.Header>

            <Modal.Body>
                <p className="text-sm">
                    Are you sure you want to delete your account? This action cannot be undone.
                </p>
            </Modal.Body>

            <Modal.Footer>
                <button
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-3 py-1 rounded-md dark:bg-gray-600 dark:text-gray-200"
                    onClick={() => setDeleteDialog(false)}
                >
                    Cancel
                </button>
                <button
                    className="bg-red-600 text-gray-200 hover:bg-red-300 px-3 py-1 rounded-md dark:bg-red-700 dark:text-gray-200"
                    onClick={() => deleteAccount(user.id, router, dispatch)}
                >
                    Delete
                </button>
            </Modal.Footer>
        </Modal>
    );
}