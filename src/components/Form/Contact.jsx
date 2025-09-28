'use client';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { pushData } from "@/services/api";
import { useTranslation } from "react-i18next";
const ContactForm = ({ title = 'General Feedback', articleId = null }) => {
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm();


    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            console.log(data);
            // Simulate API call - replace with actual API endpoint
            // await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await pushData("feedback", data);
            // console.log("Response:", response);
            
            // console.log("Form data:", data);
            setSubmitSuccess(true);
            reset();
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-form">
            <div className="container">
                <div className="form-contact">
                    <div className="form-contact__content">
                        <h3>{title}</h3>
                        <div className="form-contact__content__info">
                            <span>Email:</span>
                            <a href="mailto:wundemail@gmail.com">wundemail@gmail.com</a>
                        </div>
                        <div className="form-contact__content__info">
                            <span>{currentLocale === 'id' ? 'Alamat:' : 'Address:'}</span>
                            <p>Sinar Mas Land Plaza, Tower 1, 10th Floor,<br /> Jl. KH Ahmad Dahlan No. 1, Jakarta Selatan, <br /> Kota Jakarta Pusat, DKI Jakarta, 10350</p>
                        </div>
                        <div className="form-contact__content__info">
                            <span>{currentLocale === 'id' ? 'Ikuti kami' : 'Follow us'}</span>
                            <div className="flex gap-3 flex-row mt-[10px]">
                                <a href="https://www.instagram.com/wund.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600 transition-colors socmed">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <rect width="20" height="20" x="2" y="2" rx="6" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/wund-id/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors socmed">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M7 10v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        <circle cx="7" cy="7" r="1.2" fill="currentColor"/>
                                        <path d="M11 13c0-1.1.9-2 2-2s2 .9 2 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        <path d="M13 13v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/wund.id" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition-colors socmed">
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M16 8h-2a2 2 0 0 0-2 2v2h-2v2h2v4h2v-4h2l.5-2H14v-1a.5.5 0 0 1 .5-.5H16V8z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {submitSuccess ? (
                        <div className="max-w-md mx-auto h-fit text-center p-8 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                                <div className="w-8 h-8 text-green-600">✓</div>
                            </div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">
                                {t("contact.success.title")}
                            </h3>
                            <p className="text-green-600">
                                {t("contact.success.description")}
                            </p>
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
                            <div className="form-group">
                                <label htmlFor="name">{t("contact.form.name")}</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        {...register("name", {
                                            required: t("contact.form.error"),
                                        })}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                            errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                                        }`}
                                        placeholder={currentLocale === 'id' ? 'Masukkan nama Anda' : 'Enter your name'}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t("contact.form.email")}</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        {...register("email", {
                                            required: t("contact.form.error"),
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: t("contact.form.error_email")
                                            }
                                        })}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                            errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                                        }`}
                                        placeholder={currentLocale === 'id' ? 'Masukkan email Anda' : 'Enter your email'}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        {articleId && (
                            <>
                                {/* Hidden Article ID Field */}
                                <input
                                    type="hidden"
                                    {...register("article_id")}
                                    value={articleId}
                                />
                            </>
                        )}
                        <div className="form-group">
                            <label htmlFor="message">{articleId ? t("contact.form.message_product") : t("contact.form.message")}</label>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register("message", {
                                        required: t("contact.form.error"),
                                    })}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                                        errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
                                    }`}
                                    placeholder={currentLocale === 'id' ? 'Tulis sesuatu...' : 'write something...'}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="pt-5">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`btn w-full btn-primary ${
                                    isSubmitting && "bg-gray-400 cursor-not-allowed"}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        {currentLocale === 'id' ? 'Mengirim...' : 'Sending...'}
                                    </>
                                ) : (
                                    articleId ? t("contact.form.submit_product") : t("contact.form.submit")
                                )}
                            </button>
                        </div>
                    </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;