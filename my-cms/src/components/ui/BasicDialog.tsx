import { ReactNode } from 'react'

interface BasicDialogProps {
    open: boolean
    onClose: () => void
    children: ReactNode
}

export const BasicDialog = ({ open, onClose, children }: BasicDialogProps) => {
    if (!open) return null

    return (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    )
}
