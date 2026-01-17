import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  company?: string | null;
  message: string;
}

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (formData: ContactFormData) => {
      console.log('Submitting form data:', formData);

      const response = await fetch('https://contact-form-worker.gabod2000.workers.dev/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message
        })
      });

      const data = await response.json();
      console.log('Response:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      return data;
    },
    onSuccess: (data) => {
      toast({
        title: "Inquiry Sent",
        description: data.message || "Thank you for contacting Xara Labs. We will get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
    },
  });
}
