import { useState } from "react";
import "./ReadMoreLess.css"

export default function ReadMoreLess() {

    const [collapse, setCollapse] = useState(false)

  return (
    <div className="ReadMoreLess">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea velit impedit, accusantium exercitationem necessitatibus voluptatem numquam facere minus dolorum dolorem delectus adipisci amet aperiam praesentium quos ipsa dolor at.</p>

    <span className={`long-text ${collapse ? "expanded" : ""}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit aspernatur nam neque numquam sapiente ad et maiores consequatur dolorem quas, sequi odio ipsa? Culpa nostrum sit minima, esse ipsam similique repudiandae assumenda asperiores iure quisquam in ratione eum enim provident!</span>
    {collapse && <button onClick={() => setCollapse ((prev) => !prev)}>Read Less</button>} 
    {!collapse && <button onClick={() => setCollapse((prev) => !prev)}>Read More</button>}
    </div>
  )
}
