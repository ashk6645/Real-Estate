import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contacts = () => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResult("Sending...");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "c627cbf9-7b87-4355-b57e-053f409baa12");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                toast.success("Form Submitted Successfully");
                event.target.reset();
            } else {
                toast.error(data.message || "Submission failed. Please try again.");
                setResult("");
            }
        } catch (error) {
            toast.error("Network error. Please try again.");
            setResult("");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" 
            id="Contact"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Contact <span className="underline underline-offset-4 decoration-blue-500 font-light">With Us</span>
            </h1>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
                Ready to make a move? Let's build your future together.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8 space-y-6">
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 text-left">
                        <label className="block mb-2 font-semibold">Your Name</label>
                        <input 
                            className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                            type="text" 
                            name="Name" 
                            placeholder="Your Name" 
                            required 
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 text-left">
                        <label className="block mb-2 font-semibold">Your Email</label>
                        <input 
                            className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                            type="email" 
                            name="Email" 
                            placeholder="Your Email" 
                            required 
                        />
                    </div>
                </div>
                <div className="text-left">
                    <label className="block mb-2 font-semibold">Message</label>
                    <textarea 
                        className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        name="Message" 
                        placeholder="Message" 
                        required
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className={`bg-blue-600 text-white py-3 px-12 rounded-lg transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </motion.div>
    );
};

export default Contacts;
