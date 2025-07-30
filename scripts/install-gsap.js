// GSAP installation script
import { execSync } from "child_process"

try {
  console.log("Installing GSAP...")
  execSync("npm install gsap", { stdio: "inherit" })
  console.log("GSAP installed successfully!")
} catch (error) {
  console.error("Error installing GSAP:", error)
}
