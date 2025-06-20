'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

// Define FormData type
type FormData = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  website?: string;
  message: string;
  projectType?: string;
  referralSource: string;
};

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  organization: yup.string().required("Organization is required"),
  website: yup.string().url("Invalid URL").optional(),  // ✅ Changed from `notRequired()` to `optional()`
  message: yup.string().required("Message is required"),
  projectType: yup.string().optional(),  // ✅ Changed from `notRequired()` to `optional()`
  referralSource: yup.string().required("This field is required"),
});

// prop type 
type IProps = {
  btnCls?: string;
};

export default function ContactForm({ btnCls = '' }: IProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema) as any,  // ✅ TypeScript workaround (if needed)
  });

  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
  <div className="cn-contactform-input mb-25">
    <label>Full Name*</label>
    <input
      id="name"
      {...register("name")}
      type="text"
      placeholder="John Doe"
      className="w-full px-4 py-3 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212]"
    />
    <ErrorMsg msg={errors.name?.message!} />
  </div>

  <div className="cn-contactform-input mb-25">
    <label>Email*</label>
    <input
      id="email"
      {...register("email")}
      type="email"
      placeholder="your@email.com"
      className="w-full px-4 py-3 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212]"
    />
    <ErrorMsg msg={errors.email?.message!} />
  </div>

  <div className="cn-contactform-input mb-25">
    <label>Phone Number*</label>
    <input
      id="phone"
      {...register("phone")}
      type="tel"
      placeholder="+1234567890"
      className="w-full px-4 py-3 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212]"
    />
    <ErrorMsg msg={errors.phone?.message!} />
  </div>

  <div className="cn-contactform-input mb-25">
    <label>Organization*</label>
    <input
      id="organization"
      {...register("organization")}
      type="text"
      placeholder="Your Company Name"
      className="w-full px-4 py-3 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212]"
    />
    <ErrorMsg msg={errors.organization?.message!} />
  </div>

  <div className="cn-contactform-input mb-25">
    <label>Website</label>
    <input
      id="website"
      {...register("website")}
      type="url"
      placeholder="https://yourwebsite.com"
      className="w-full px-4 py-3 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212]"
    />
    <ErrorMsg msg={errors.website?.message!} />
  </div>

  <div className="cn-contactform-input mb-25">
    <label>Tell Us About Your Project*</label>
    <textarea
      id="message"
      {...register("message")}
      placeholder="Give us the big picture."
      className="w-full px-4 py-3 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212]"
    />
    <ErrorMsg msg={errors.message?.message!} />
  </div>

  <div className="cn-contactform-input mb-25">
    <label>Select a Project Type</label>
    <div className="relative w-full">
      <select
        id="projectType"
        {...register("projectType")}
        className="w-full px-4 py-3 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212] appearance-none"
        style={{ width: '100%' }} // Ensure it spans the full width of the container
      >
        <option value="">Select a Project Type</option>
        <option value="Marketing">Marketing</option>
        <option value="Video">Video</option>
        <option value="Photography">Photography</option>
      </select>
    </div>
    <ErrorMsg msg={errors.projectType?.message!} />
  </div>

  <div className="cn-contactform-input mb-25">
    <label>How did you hear about us?*</label>
    <div className="relative w-full">
      <select
        id="referralSource"
        {...register("referralSource")}
        className="w-full px-4 py-3 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212] appearance-none"
        style={{ width: '100%' }} // Ensure it spans the full width of the container
      >
        <option value="">Select an Option</option>
        <option value="Google">Google</option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="YouTube">YouTube</option>
        <option value="Referral">Referral</option>
      </select>
      <ErrorMsg msg={errors.referralSource?.message!} />
    </div>
  </div>

  <div className="cn-contactform-btn">
    <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
      Send Message
    </button>
  </div>
</form>

  );
}
