export const metadata = {
  template:"%s | services",
  title: "services",
  description: "services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header style={{ backgroundColor: "teal" }}>header</header>
      
        {children}
        <footer style={{ backgroundColor: "darkslategray" ,color:"white"}}>footer</footer>
      </body>
    </html>
  );
}
