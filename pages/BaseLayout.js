import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const index=({ children })=>{
    return(
        <div>
            <Head>
              <style>
              
              @import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap');

                @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
             </style>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default index;