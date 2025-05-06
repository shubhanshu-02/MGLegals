"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function Disclaimer() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted")

    if (!hasAccepted) {
      // Show the disclaimer popup if not previously accepted
      setOpen(true)
    }
  }, [])

  const handleAccept = () => {
    // Save acceptance in localStorage
    localStorage.setItem("disclaimerAccepted", "true")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center ">Legal Disclaimer</DialogTitle>
        </DialogHeader>
        <DialogDescription className="pt-2 text-base space-y-2 text-justify">
  <ul className="list-inside list-disc">
    <li>
      The Bar Council of India Rules prohibit advocates from soliciting work or advertising directly or
      indirectly. By clicking &quot;I AGREE&quot; button the User acknowledges the following:
    </li>
    <li>
      This website and the information and details therein are solely for the purpose of the User&apos;s information
      and personal consumption, and there has been no advertisement, personal communication, solicitation,
      invitation or any other inducement of any sort whatsoever by or on behalf of the firm or any of its
      partners, associates or advocates to solicit any work.
    </li>
    <li>
      The User has accessed this website of their own accord. Any information obtained or material downloaded from
      this website is completely at the User&apos;s discretion and for personal consumption not amounting to
      advertising and not creating any advocate-client relationship.
    </li>
    <li>
      The firm, including its partners, associates and advocates, are not responsible for any loss, damage or
      consequence of actions taken or not taken by the User based on or as a result of the information provided on
      this website.
    </li>
  </ul>
</DialogDescription>
        <DialogFooter className="sm:justify-center">
          <Button onClick={handleAccept} className="mt-2 w-full sm:w-auto">
            I AGREE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
