export default function Page() {
  return (
  <>
    <header>
      <h1>CONTACT US &nbsp;</h1>  
      <h3>Fill out the form below to know more!</h3>
    </header>
    <main>
    <form action="#">
        <ul>
          
          <li>
            <p class="left">
              <label for="first_name">first name</label>
              <input type="text" name="first_name" placeholder="John" />
            </p>
            <p class="pull-right">
              <label for="last_name">last name</label>
              <input type="text" name="last_name" placeholder="Smith" />      
            </p>
          </li>
          
          <li>
            <p>
              <label for="email">email <span class="req">*</span></label>
              <input type="email" name="email" placeholder="john.smith@gmail.com" />
            </p>
          </li>        
          <li><div class="divider"></div></li>
          <li>
            <label for="comments">Get in Touch</label>
            <textarea cols="46" rows="3" name="comments"></textarea>
          </li>
          
          <li>
            <input class="btn btn-submit" type="submit" value="Submit" />
            <small>or press <strong>enter</strong></small>
          </li>
          
        </ul>
      </form>  
    </main>
  </>
  )
}