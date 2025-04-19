import { FieldProps } from '@firecms/core'
import { useEffect, useState } from 'react'
import { getStorage, listAll, ref, getDownloadURL } from 'firebase/storage'
import { BasicDialog } from './ui/BasicDialog'
export default function FirebaseImagePickerField({
    value,
    setValue,
}: FieldProps<string>): JSX.Element {
    const [images, setImages] = useState<string[]>([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!open) return

        const fetchImages = async () => {
            const storage = getStorage()
            const folderRef = ref(storage, 'media')
            const result = await listAll(folderRef)
            const urls = await Promise.all(
                result.items.map((item) => getDownloadURL(item))
            )
            setImages(urls)
        }

        fetchImages()
    }, [open])

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className="rounded bg-blue-600 px-4 py-1 text-white"
            >
                {value ? 'Change Image' : 'Select Image'}
            </button>

            <BasicDialog open={open} onClose={() => setOpen(false)}>
                <h2 className="mb-4 text-lg font-semibold">Select an image</h2>
                <div className="grid max-h-96 grid-cols-3 gap-3 overflow-y-auto">
                    {images.map((url) => (
                        <img
                            key={url}
                            src={url}
                            className="cursor-pointer rounded border hover:border-blue-500"
                            onClick={() => {
                                setValue(url)
                                setOpen(false)
                            }}
                        />
                    ))}
                </div>
            </BasicDialog>

            {value && (
                <img
                    src={value}
                    alt="Selected"
                    className="mt-2 w-32 rounded border"
                />
            )}
        </div>
    )
}
