import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:mandalankit2229@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client to send the message.");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl mx-auto">
      <div>
        <label className="text-sm mb-1 block">Name</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      </div>
      <div>
        <label className="text-sm mb-1 block">Email</label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
      </div>
      <div>
        <label className="text-sm mb-1 block">Message</label>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can I help you?" rows={5} />
      </div>
      <div className="flex justify-center">
        <Button variant="hero" size="lg" type="submit">Send Message</Button>
      </div>
    </form>
  );
}
