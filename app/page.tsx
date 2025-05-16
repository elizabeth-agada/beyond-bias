import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            BEYONDBIAS <span className="text-[#D4AF37]">FOUNDATION</span>
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#journey">Our Journey</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href="#donate" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition">
            Donate
          </NavLink>
          </nav>
          <MobileNav />
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <Image src="/img/laptop-typing.jpg" alt="Hero Background" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
            BEYONDBIAS
            <br />
            FOUNDATION
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl mb-8 italic">&quot;There is Space For You Here.&quot; - S. Minhas</p>
            <div className="w-24 h-1 bg-gold mx-auto my-12"></div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Mission:</h2>
              <p className="text-lg md:text-xl mb-12">
                We are on a mission to uplift underrepresented youth by breaking down systemic barriers and expanding
                access to education, mentorship, and empowering career opportunities, so every child has a real chance to
                succeed and lead
              </p>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Vision:</h2>
              <p className="text-lg md:text-xl">
                We envision a world where every underserved young person is equipped with the tools, guidance, and
                opportunities to thrive—building a future that&apos;s diverse, inclusive, and driven by empowered leaders
                from every background
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#journey" className="text-white/50 hover:text-white">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </section>

      <section id="journey" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Journey to Empower Change" />
          <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
            <div className="space-y-6">
              <p className="text-xl text-white/90">
                At Beyond Bias Foundation, we believe every child deserves the chance to thrive, no matter where they&apos;re
                born.
              </p>

              <div>
                <p className="text-lg text-white/80 mb-3">
                  Our <span className="text-[#D4AF37] font-semibold">Foundation of Fatih & Excellence Program</span> in
                  Jalingo, Nigeria, sponsors underprivileged students from primary through secondary school. We provide
                  access to education, safe housing, mentorship, meals, and essential resources— empowering children to
                  rise above poverty and become future leaders.
                </p>
              </div>

              <div>
                <p className="text-lg text-white/80">
                  Founded by Dr. Navjot K. Minhas, Beyond Bias was created to eliminate systemic barriers and open doors
                  to prestigious careers. This program is part of our global mission to create opportunity, uplift
                  communities, and nurture talent that might otherwise be overlooked.
                </p>
              </div>

              <div className="pt-4">
                <a href="https://www.linkedin.com/in/beyondbias-foundation-24241a32a/" className="inline-block bg-[#D4AF37] hover:bg-amber-50[#D4AF37]/90 text-black font-medium px-6 py-2 rounded-md transition">
                <h2 className=" ">Learn More About Our Story</h2>
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-md overflow-hidden rounded-lg border-4 border-gold/30">
                <Image
                  src="/img/dr-minhas.jpg"
                  alt="Dr. Navjot K. Minhas, Founder"
                  width={500}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
                  <p className="text-[#D4AF37] font-semibold">Dr. Navjot K. Minhas</p>
                  <p className="text-white/80 text-sm">Founder, Beyond Bias Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="how-it-works" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeader title="How It Works" />

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-xl text-white/90">
              The Faith and Excellence Program operates to fund underprivileged children, financially their education
              from primary to secondary
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-[#D4AF37]">Sponsorship Model:</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-[#D4AF37] mr-4 text-2xl">•</div>
                  <p className="text-lg text-white/90">Sponsor a child monthly or yearly</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#D4AF37] mr-4 text-2xl">•</div>
                  <p className="text-lg text-white/90">
                    One child, one sponsor: Get updates and stay connected to the child you support.
                  </p>
                </li>
              </ul>
              <div className="mt-8">

                 <Link href="/#donate" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition">
              Become a Sponsor
            </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-[#D4AF37]">What&apos;s Included:</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-[#D4AF37] mr-4 text-2xl">•</div>
                  <div>
                    <span className="text-lg font-semibold text-white">Education: </span>
                    <span className="text-lg text-white/90">Enrollment in primary and secondary schools</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-[#D4AF37] mr-4 text-2xl">•</div>
                  <div>
                    <span className="text-lg font-semibold text-white">Housing: </span>
                    <span className="text-lg text-white/90">Safe, stable accommodation with a host family</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-[#D4AF37] mr-4 text-2xl">•</div>
                  <div>
                    <span className="text-lg font-semibold text-white">Mentorship: </span>
                    <span className="text-lg text-white/90">Guidance and support for academic and personal growth</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-6 text-lg">
              Learn More About Our Program
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
        
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Your Impact: Changing Lives Through Education</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
          See how your support is shaping the future
        </p>
        <div className="grid grid-cols-2 gap-8 text-center mt-12">
          
          <div className="p-6 bg-gray-900 rounded-lg border border-red-600">
            <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
            <p className="text-lg text-gold-500">Graduate Rate</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg border border-red-600">
            <div className="text-4xl font-bold text-red-600 mb-2">10</div>
            <p className="text-lg text-gold-500">Years of Impact</p>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/impact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition">
            See Our Full Impact Report
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-2">
       
        <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
          <Image
            src="/img/impact.jpg"
            alt="Impact Image"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</section>

     <section className="py-16 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Hear from Our Students for 2025</h2>
    
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-1">
          <div className="w-full aspect-square max-w-sm mx-auto bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src="/img/massiah.jpg"
              alt="Massiah"
              width={500}
            height={500}
            className="object-cover rounded-lg"
              />
          </div>
        </div>
        <div className="order-2">
          <p className="text-lg md:text-xl text-gray-300">
            13-year-old Massiah from Gembu, Nigeria, lost his mother at birth and 
            has been raised in poverty by his father. Despite the odds, he dreams 
            of going to school. With your sponsorship, Massiah can access 
            education and create a brighter future.
          </p>
          <div className="mt-6">
            <Link href="/#donate" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition">
              Sponsor Massiah
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <p className="text-lg md:text-xl text-gray-300">
            At 14, Muri has faced abandonment and hardship, raised by his 
            hardworking mother who farms to support them. Sponsorship would 
            open the door to education, giving Muri a path to a brighter future and 
            easing his mother&apos;s load.
          </p>
          <div className="mt-6">
            <Link href="/#donate" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition">
              Sponsor Muri
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="w-full aspect-square max-w-sm mx-auto bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
              src="/img/muri.jpg"
              alt="Muri"
              width={500}
            height={500}
            className="object-cover rounded-lg"
              />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-1">
          <div className="w-full aspect-square max-w-sm mx-auto bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src="/img/kindness.jpg"
              alt="Kindness"
              width={500}
            height={500}
            className="object-cover rounded-lg"
              />
          </div>
        </div>
        <div className="order-2">
          <p className="text-lg md:text-xl text-gray-300">
            6-year-old Kindness comes from a caring but struggling family. With her mother 
            recently ill, finances are tight, and school is out of reach. Your sponsorship 
            can give Kindness the education she deserves.
          </p>
          <div className="mt-6">
            <Link href="/#donate" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition">
              Sponsor Kindness
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-16 text-center">
      <a href="/students" className="inline-block border-2 border-gold-500 hover:bg-gold-500 hover:text-black text-gold-500 px-8 py-3 rounded-md font-medium transition">
        Meet More Students
      </a>
    </div>
  </div>
</section>


<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-white mb-16">Our Latest Trip to Nigeria</h2>
    
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      <div className="relative h-auto w-full mb-4 break-inside-avoid">
        <Image 
          src="/img/trip1.jpg" 
          alt="Children and visitors in classroom" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      
      <div className="relative h-auto w-full mb-4 break-inside-avoid">
        <Image 
          src="/img/trip5.jpg" 
          alt="Meeting with local representatives" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      
  
      <div className="relative h-auto w-full mb-4 break-inside-avoid">
        <Image 
          src="/img/trip3.jpg" 
          alt="Classroom with students" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      
      <div className="relative h-auto w-full mb-4 break-inside-avoid">
        <Image 
          src="/img/trip4.jpg" 
          alt="Outside school building" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      
      <div className="relative  w-full mb-4 break-inside-avoid">
        <Image 
          src="/img/trip2.jpg" 
          alt="School entrance" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
      </div>

      <div className="relative h-auto w-full mb-4 break-inside-avoid">
        <div className="aspect-w-16 aspect-h-9">
          <video 
            className="w-full h-full object-cover rounded"
            src="/img/nigeria-trip-video.mov"
            poster="/img/nigeria-trip-video-thumbnail.png"
            controls
            playsInline
            style={{ transform: 'rotate(0deg)' }} 
          />
        </div>
      </div>


      <div className="relative h-auto w-full mb-4 break-inside-avoid">
        <Image 
          src="/img/trip7.jpg" 
          alt="School bus" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      
      <div className="relative h-auto w-full mb-4 break-inside-avoid">
        <Image 
          src="/img/trip6.jpg" 
          alt="Students in classroom" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      
      <div className="relative h-auto w-full mb-4 break-inside-avoid">
        <Image 
          src="/img/trip8.jpg" 
          alt="Teacher with students" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      
      <div className="relative h-auto w-full mb-4 break-inside-avoid">
        <Image 
          src="/img/trip9.jpg" 
          alt="Teacher with students" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
    
  
  </div>
</section>

<section id="donate" className="py-16  text-white">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Donate Now!</h2>
        <p className="text-xl mb-6">
          &quot;Your donation helps us fund scholarships, mentorship sessions, and provide resources to underserved students.&quot;
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white text-black bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Sponsorship Options</h3>
          <div className="space-y-4">
            <div className="border-b border-white border-opacity-20 pb-4">
              <h4 className="font-bold text-xl">Monthly Sponsorship - $50/month</h4>
              <p>Cover a child&apos;s ongoing school and living expenses in full.</p>
            </div>
            <div className="border-b border-white border-opacity-20 pb-4">
              <h4 className="font-bold text-xl">One-Time Full Year Sponsorship - $600</h4>
              <p>Sponsor an entire year of education and care with a single donation.</p>
            </div>
            <div className="border-b border-white border-opacity-20 pb-4">
              <h4 className="font-bold text-xl">One-Time Donation - $100</h4>
              <p>Contribute toward school fees, supplies, or healthcare — every dollar helps!</p>
            </div>
            <div className="border-b border-white border-opacity-20 pb-4">
              <h4 className="font-bold text-xl">Back-to-School Kit - $75</h4>
              <p>Equip a child with essential school supplies, shoes, and hygiene items.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl">Transport & Meals Support - $35/month</h4>
              <p>Ensure a child gets to school safely and receives daily nourishment.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-4 rounded-lg mb-6">
            <Image 
          src="/img/qr.png" 
          alt="Teacher with students" 
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded"
        />
          </div>
          <div className="space-y-4">
            <a 
              href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-12913" 
              className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Click Here to Donate
            </a>
            <p className="text-lg">or donate using</p>
            <p className="text-2xl font-bold">
              Zelle or Venmo: <span className="bg-white text-black bg-opacity-20 px-2 py-1 rounded">Beyonbdiasfoundation@yahoo.com</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-xl">
          Your support brings hope, opportunity, and a future full of promise.
        </p>
        <p className="text-xl font-bold mt-2">
          Donate today — and help a child thrive.
        </p>
      </div>
    </div>
  </div>
</section>


      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeader title="Contact Us" />
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">Get In Touch</h3>
              <p className="text-lg text-white/80 mb-8">
                Have questions about our programs or want to learn more about how you can support our mission? We&apos;d love
                to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mr-4">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-white/70">3477 Mckee Rd#1002

San Jose, Ca

95127

United States</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-white/70">Beyonbdiasfoundation@yahoo.com</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="bg-zinc-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  ></textarea>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg rounded-md">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                BEYONDBIAS <span className="text-[#D4AF37]">FOUNDATION</span>
              </h3>
              <p className="text-white/70 mb-6">
                At Beyond Bias Foundation, we believe every child deserves the chance to thrive —no matter where they&apos;re born.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/beyondbias-foundation-24241a32a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                  </svg>
                </a>
            </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <FooterLink href="#">Home</FooterLink>
                <FooterLink href="#journey">Our Journey</FooterLink>
                <FooterLink href="#how-it-works">How It Works</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Programs</h4>
              <ul className="space-y-3">
                <FooterLink href="#">Education Access</FooterLink>
                <FooterLink href="#">Mentorship</FooterLink>
                <FooterLink href="#">Community Outreach</FooterLink>
              </ul>
            </div>
          
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
            <p>© {new Date().getFullYear()} BeyondBias Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}


function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={className ? className : "text-white/80 hover:text-[#D4AF37] transition-colors duration-300"}
    >
      {children}
    </a>
  )
}


function MobileNav() {
  return (
    <div className="md:hidden">
      <Button variant="ghost" className="text-white">
        <span className="sr-only">Open menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>
    </div>
  )
}


function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      <div className="w-20 h-1 bg-gold mx-auto"></div>
    </div>
  )
}






function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-white/70 hover:text-[#D4AF37] transition-colors">
        {children}
      </a>
    </li>
  )
}
