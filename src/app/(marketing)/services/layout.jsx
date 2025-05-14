


export const metadata={
    
    title:"webdev",
    description:"webdev",
}
export default function servicesLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "teal" }}>services</header>
       
          {children}
        
       
      </body>
    </html>
  );
}