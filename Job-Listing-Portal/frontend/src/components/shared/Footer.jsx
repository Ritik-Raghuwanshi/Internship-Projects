import { GithubIcon, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center ">
        <p className="text-sm">
          © {new Date().getFullYear()} JobListingPortal. All Rights Reserved.
        </p>
        <div className="flex justify-end space-x-4">
          <a
            href="https://www.linkedin.com/in/chaitanya-umbarkar-323470239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={24} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
