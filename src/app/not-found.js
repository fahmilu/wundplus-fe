import LayoutBase from "@/components/LayoutBase";
import Link from "next/link";
const NotFound = async ({ params }) => {
    const param = await params;
    const locale = param?.locale || "id";
    console.log(params);
    // const locale = "en";
    return (
        <LayoutBase locale={locale} isNoFooter={true}>
            <section className="bg-[white]">
                <div className="container !max-w-[978px]">            
                    <div className="flex flex-col gap-4 items-center justify-center h-screen">
                        <h1 className="text-center">{locale === "en" ? "404 - Page Not Found" : "404 - Halaman tidak ditemukan"}</h1>
                        <p className="text-center">{locale === "en" ? "We're sorry, we can't find the page you're looking for. Try returning to our homepage." : "Maaf, kami tidak dapat menemukan halaman yang anda cari. Silakan kembali ke halaman utama."}</p>
                        <Link href="/" className="btn btn__primary">{locale === "en" ? `Go to homepage` : `Kembali ke halaman utama`}</Link>
                    </div>
                </div>
            </section>
        </LayoutBase>
    );
}

export default NotFound;