import React, { useState, useEffect } from 'react'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { IconNotes } from '@/components/icons'
import { Textarea } from '@/components/ui/textarea'

const Notes: React.FC = ({}) => {
  const [noteContent, setNoteContent] = useState('')

  useEffect(() => {
    const savedNotes = localStorage.getItem('notesContent')
    if (savedNotes) {
      setNoteContent(savedNotes)
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('notesContent', noteContent)
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="rounded-full flex border p-2 cursor-pointer hover:bg-muted/90">
            <IconNotes />
          </div>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Notes</AlertDialogTitle>
            <AlertDialogDescription>
              <Textarea
                className="min-h-[400px] max-h-[700px]"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel onClick={handleSave}>Save</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Notes
