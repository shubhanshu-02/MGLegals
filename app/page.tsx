"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Disclaimer } from "@/components/disclaimer"
// import { MobileNav } from "@/components/mobile-nav"

// Define navigation items
const navItems = [
  // { href: "#", label: "Home" },
  { href: "#practice-areas", label: "Practice Areas" },
  { href: "#attorneys", label: "Our Team" },
  { href: "#contact", label: "Contact" },
]

export default function Home() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (!link) return

      const href = link.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      e.preventDefault()

      const targetId = href === "#" ? "top" : href.slice(1)
      const targetElement = targetId === "top" ? document.body : document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })

        // Update URL without reload
        window.history.pushState({}, "", href)
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Disclaimer Popup */}
      <Disclaimer />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full py-1 px-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-800 text-white">
              <span className="font-serif text-xl font-bold">MG</span>
            </div>
            <Link href={"#"} className="font-serif text-2xl font-bold">MG Legals</Link>
          </div>
          <nav className="hidden md:flex md:gap-8">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className="text-md font-medium transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex text-md">
              Schedule Consultation
            </Button>
            {/* <MobileNav navItems={navItems} /> */}
          </div>
        </div>
      </header>

      <main className="flex-1 px-10 py-10">
        {/* Hero Section */}
        <section className="w-full rounded-2xl py-12 md:py-18 lg:py-24 bg-stone-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 px-4">
                <div className="space-y-6">
                  <h1 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Legal Excellence & Integrity
                  </h1>
                  <p className="max-w-[650px] text-gray-500 md:text-xl">
                    Providing expert legal counsel across India with a commitment to justice and client success since 2010.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button variant="default" size={"lg"} className="hidden md:inline-flex text-lg">
                Speak to an Attorney
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size={"lg"}>Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/1.jpg"
                  width={550}
                  height={550}
                  alt="Law firm building"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section id="practice-areas" className="w-full py-12 md:py-24 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm">Expertise</div> */}
                <h2 className="text-4xl font-serif font-bold tracking-tighter sm:text-5xl">Our Practice Areas</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive legal services across various domains to meet your specific needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl p-4 grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Corporate Law",
                  description: "Business formations, mergers & acquisitions, corporate governance, and compliance.",
                },
                {
                  title: "Civil Litigation",
                  description: "Representation in civil disputes, contract disputes, and property matters.",
                },
                {
                  title: "Family Law",
                  description: "Divorce, child custody, adoption, and other family-related legal matters.",
                },
                {
                  title: "Real Estate",
                  description: "Property transactions, leasing agreements, and real estate litigation.",
                },
                {
                  title: "Intellectual Property",
                  description: "Trademark registration, copyright protection, and IP litigation.",
                },
                {
                  title: "Criminal Defense",
                  description: "Representation in criminal cases, bail applications, and appeals.",
                },
              ].map((area, index) => (
                <Card key={index} className="transition-all hover:shadow-lg bg-stone-50">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl text-center">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-justify px-4 min-h-18">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Attorneys */}
        <section id="attorneys" className="w-full py-12 md:py-24 lg:py-28 bg-stone-100 rounded-2xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm">Our Team</div> */}
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">Meet Our Attorneys</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experienced attorneys is dedicated to providing exceptional legal services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "",
                  title: "",
                  bio: "",
                },
                {
                  name: "Manish Gupta",
                  title: "Founder",
                  bio: "Over 20 years of experience in corporate law and civil litigation.",
                },
                {
                  name: "",
                  title: "",
                  bio: "",
                },
              ].map((attorney, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <div className="h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=160&width=160&text=${attorney.name.charAt(0)}`}
                      width={300}
                      height={300}
                      alt={attorney.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-serif font-bold">{attorney.name}</h3>
                    <p className="text-md text-gray-500">{attorney.title}</p>
                    <p className="text-md">{attorney.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-28">
          <div className="container px-4 md:px-6 ">
            <div className="grid gap-6 lg:grid-cols-2  lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 px-10">
                <div className="space-y-2">
                  {/* <div className="inline-block rounded-lg bg-stone-100 px-3 py-1 text-sm">Contact Us</div> */}
                  <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl ">
                    Get In Touch
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We&apos;re here to help with your legal needs. Reach out to schedule a consultation.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-stone-800" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-gray-500">Kings Mall, Sector - 9, Rohini, New Delhi - 110085</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-stone-800" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-gray-500">+91 92108 75214</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-stone-800" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-gray-500">advocate.manish.g@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md space-y-4 rounded-lg border bg-stone-100 p-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold">Schedule a Consultation</h3>
                    <p className="text-sm text-gray-500">Fill out the form below and we&apos;ll get back to you shortly.</p>
                  </div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none">
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium leading-none">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button className="w-full">Submit</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
            {/* Modern Footer */}
            <footer className="bg-stone-900 text-white">
        {/* Main Footer Content */}
        <div className="container px-8 py-12 md:py-16 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: About */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-stone-900">
                  <span className="font-serif text-xl font-bold">MG</span>
                </div>
                <div className="font-serif text-xl font-bold">MG Legals</div>
              </div>
              <p className="text-stone-300 text-justify">
                Providing expert legal counsel across India with a commitment to justice and client success since 1985.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-primary transition-colors">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white hover:text-primary transition-colors">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-white hover:text-primary transition-colors">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-white hover:text-primary transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-bold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-stone-300 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#practice-areas"
                    className="text-stone-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Practice Areas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#attorneys"
                    className="text-stone-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-stone-300 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Practice Areas */}
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-bold">Practice Areas</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#practice-areas"
                    className="text-stone-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Corporate Law
                  </Link>
                </li>
                <li>
                  <Link
                    href="#practice-areas"
                    className="text-stone-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Civil Litigation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#practice-areas"
                    className="text-stone-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Family Law
                  </Link>
                </li>
                <li>
                  <Link
                    href="#practice-areas"
                    className="text-stone-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Real Estate
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-bold">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-white shrink-0 " />
                  <span className="text-stone-300">Kings Mall, Sector - 9, Rohini, New Delhi - 110085</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-white shrink-0" />
                  <span className="text-stone-300">+91 92108 75124</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-white shrink-0" />
                  <span className="text-stone-300">advocate.manish.g@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="border-t border-stone-700 bg-stone-950">
          <div className="container px-4 py-6">
            <div className="space-y-4">
              <div className="text-md text-stone-400">
                <p className="font-medium mb-2 px-2">DISCLAIMER :-</p>
                <p className="px-4">
                  The Bar Council of India Rules prohibit advocates from soliciting work or advertising directly or
                  indirectly. The information provided on this website is for informational purposes only and should not
                  be construed as legal advice.
                  MG Legals is the name of a law firm and is not an advertisement or solicitation. This website is not
                  intended to create any attorney-client relationship.
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-4 px-2 border-t border-stone-800">
                <p className="text-xs text-stone-400">© 2025 MG Legals. All rights reserved.</p>
                <div className="flex space-x-4 mt-3 md:mt-0">
                  <Link href="#" className="text-xs text-stone-400 hover:text-white">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="text-xs text-stone-400 hover:text-white">
                    Terms of Service
                  </Link>
                  <Link href="#" className="text-xs text-stone-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
  )
}
