import React from 'react'
import { toast } from 'react-toastify';


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e752adea-b557-436b-9bed-e8254e05a4f1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Succcessfully")

        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult(data.message);
      }
    };

    return (
        <div 
        // initial={{opacity:0,x:-200}}
        // transition={{duration:1}}
        // whileinview={{opacity:1,x:0}}
        // viewport={{once:true}}
        className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className=' text-red-600'>ME.</span> </h1>
            <p className='text-center text-gray-500 mb-12 max-w-2xl mx-auto'>Feel free to get in touch with me for any inquiries, collaborations, or feedback. 
              I'm always open to new opportunities and would love to hear from you!</p>

            <form onSubmit={onSubmit} className='mx-w-2xl mx-auto text-gray-600 pt-8' >
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name

                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email

                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
                    </div>
                </div>

                <div className='my-6 text-left'>
                    Message 
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='message' required></textarea>
                </div>
                <button className='bg-gray-800 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>
            </form>

        </div>
    )
}

export default Contact