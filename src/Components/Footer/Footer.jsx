

const Footer = () => {
    return (
        <div>

        <footer className="flex justify-center bg-base-200 text-base-content  px-10 py-4">
             <aside className="grid-flow-col items-center">
                 <h1 className="text-xl font-bold text-center">Lingo Bingo</h1>
                 <p className="text-center">
                 It is a place where you will learn with fun 
                 </p>
             </aside>
            
         </footer>
         <footer className="flex justify-between footer bg-base-200 text-base-content py-10 px-9 md:px-36">
             <nav>
                 <h6 className="footer-title">Services</h6>
                 <a className="link link-hover">Branding</a>
                 <a className="link link-hover">Design</a>
                 <a className="link link-hover">Marketing</a>
                 <a className="link link-hover">Advertisement</a>
             </nav>
             <nav>
                 <h6 className="footer-title">Company</h6>
                 <a className="link link-hover">About us</a>
                 <a className="link link-hover">Contact</a>
                 <a className="link link-hover">Jobs</a>
                 <a className="link link-hover">Press kit</a>
             </nav>
             <nav>
                 <h6 className="footer-title">Legal</h6>
                 <a className="link link-hover">Terms of use</a>
                 <a className="link link-hover">Privacy policy</a>
                 <a className="link link-hover">Cookie policy</a>
             </nav>

         </footer>
          <div className="border-t bg-base-300 border-base-200 pt-4 text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Lingo Bingo. All rights reserved.
    </p>
  </div>
     </div>
    );
};

export default Footer;