import React, { Fragment, useState } from "react"
import { Route, Routes, Link, Outlet, BrowserRouter } from "react-router-dom"
import styles from './styles.module.css'
import pico from './pico.min.css'

function Head({brand, theme, onThemeChange}) {
  return (<nav className="container-fluid" data-theme={theme}>
      <ul>
    <li>
    <Link to="/" className={pico.contrast}>{brand}</Link>
    </li>
  </ul>
  <ul>
    <li>
        <span role="link" className={pico.secondary} onClick={()=> { onThemeChange() }} >
          <svg viewBox="0 0 24 24" height="24" width="24" version="1.1">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="ic_fluent_dark_theme_24_regular" fill="#546e7a" fillRule="nonzero">
                  <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"></path>
                </g>
              </g>
            </g>
          </svg>&nbsp;&nbsp;
        </span>
    </li>
    <li>
      <details role="list" dir="rtl" open>
      <summary aria-haspopup="listbox" role="link" className={"secondary"}></summary>
        <ul role="listbox">


          <li><Link to="/">Home</Link></li>
          <li><Link to="/tour">Tour</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/apikeys">API Keys</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/billing">Billing</Link></li>
          <li><Link to="/docs">Docs</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/forums">Forums</Link></li>
          <li><Link to="/logout">Log out</Link></li>





        </ul>
      </details>
    </li>
    <li>&nbsp;</li>
  </ul>
</nav>)
};

const App = ({ children }) => {
  return (<>
    {children}
  </>)
}
function Tour() {
  return (<>  
      <div>
        <details open>
            <summary>
            Intro
            </summary>
            <p>
              <h1>Welcome to the Acme Tour</h1>
              <p>
                Your journey is broken down into learning modules. If you would like your progress tracked as well as API credits, please sign in.
              </p>
              <p>  
                Please select the default language.
                &nbsp;<i><b>NOTE:</b>&nbsp; You can change it anytime</i>
              </p>
              
              <p>
                <span role="button" className={pico.outline}>Python</span>&nbsp;
                <span role="button" className={pico.outline}>Javascript</span>
              </p>
            </p>
          </details>

          <details>
            <summary>Downloading the model</summary>
            <ul>
              <li>…</li>
              <li>…</li>
            </ul>
          </details>

          <details>
            <summary>Fine tuning the model</summary>
            <ul>
              <li>…</li>
              <li>…</li>
            </ul>
          </details>

          <details>
            <summary>Creating an API Key</summary>
            <ul>
              <li>…</li>
              <li>…</li>
            </ul>
          </details>

          <details>
            <summary>Inviting your team</summary>
            <ul>
              <li>…</li>
              <li>…</li>
            </ul>
          </details>
      </div>
    
  </>)
}

const Layout = ({brand}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => {
      return prevTheme == "light" ? "dark":"light";
    })
  };
  return (<>
    <article className={styles.softwareasaservicedashboard} data-theme={theme}>
      <Head brand={brand} className={pico.container} onThemeChange={toggleTheme}></Head>
      <div className={styles.softwareasaservicedashboard.outlet}><br /><Outlet theme={theme} /></div>
    </article>
  </>)
}

const Page = ({children}) => {
  return (<div className={styles.softwareasaservicedashboard}>
      <div className={pico.container}>
        <div className={pico.row}>
            {children}
        </div>
      </div>
  </div>)
}

const ApiSettings = ({children}) => {
  return (<>
    <h3>API Keys</h3>
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">key</th>
            <th scope="col">created</th>
            <th scope="col">last used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">default</th>
            <td><kbd>p-a3f...98b</kbd></td>
            <td>yesterday</td>
            <td>today</td>
          </tr>
          
        </tbody>
        <tfoot>
          <tr>
            <th scope="col">#</th>
            <td scope="col">&nbsp;</td>
            <td scope="col">&nbsp;</td>
            <td scope="col"><mark>100</mark></td>
          </tr>
        </tfoot>
      </table>

      <br />      
      <button className={pico.contrast}>Create new API Key</button>

    </div>
  </>)
}


const Team = ({children}) => {
  return (<>
    <h3>Team</h3>
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">email</th>
            <th scope="col">role</th>
            <th scope="col">invited</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><kbd>ilya@acmecorp...</kbd></th>
            <td><mark>read</mark> + <mark>write</mark></td>
            <td>yesterday</td>
            <td><abbr className={pico.warn}>delete</abbr></td>
          </tr>
        </tbody>
      </table>

      <br />      
      <button className={pico.contrast}>Invite</button>

    </div>
  </>)
}


const Forums = ({children}) => {
  return (<>
    <h3>Forums</h3>
    <div className={pico.grid}>
        <input type="search" id="search" name="search" placeholder="Search"></input>
        <button className={pico.outline}>Create a post</button>
      </div>
    <article>
      <table>
        <thead>
          <tr>
            <th scope="col">Topic</th>
            <th scope="col">author</th>
            <th scope="col">activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Is there a reate limit for your API?</th>
            <td><mark>coolguy101</mark></td>
            <td><small>posted 3 hours ago</small></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">How to use the model?</th>
            <td><mark>tony</mark></td>
            <td><small>3 replies <abbr>since last week</abbr></small></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Welcome!</th>
            <td><mark>Acme</mark></td>
            <td><small>10 replies since last month</small></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">What happens if you overshoot the tokens?</th>
            <td><mark>reg</mark></td>
            <td><small>2 replies since yesterday</small></td>
            <td></td>
          </tr>
        </tbody>
      </table>

    </article>
  </>)
}

const Support = ({children}) => {
  return (<>
    <h3>Team</h3>
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">email</th>
            <th scope="col">role</th>
            <th scope="col">invited</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><kbd>ilya@acmecorp...</kbd></th>
            <td><mark>read</mark> + <mark>write</mark></td>
            <td>yesterday</td>
            <td><abbr className={pico.warn}>delete</abbr></td>
          </tr>
        </tbody>
      </table>

      <br />      
      <button className={pico.contrast}>Invite</button>

    </div>
  </>)
}
const Settings = ({children}) => {
  return (<>
    <h3>Settings</h3>
    
    <div>
        <label for="accountname">
          Account Name
          <input
              type="text"
              name="login"
              aria-label="account name"
              autoComplete="account"
              required
            />
        </label>
      
        <fieldset>
          <label for="remember">
            <input type="checkbox" role="switch" id="ispersonal" name="ispersonal" />
            Personal Account
          </label>
        </fieldset>
  
        <div className={pico.grid}>  
          {children}
        </div>
        <br />      
        <button className={pico.contrast}>Save</button>
    </div>
  </>)
}

const Login = ({children}) => {
  const clicked = (e) => {
    fetch("/auth/login", {
        headers:{
            "accepts":"application/json"
        }
    })
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(json => console.log(json) )
    .catch( resp => { 
      console.log(resp)
      window.location.href='/'
     });
  };
  return (<article ><div>
    <hgroup>
      <h1>Welcome back</h1>
      <h2>Login to your account</h2>
    </hgroup>
      <input
        type="text"
        name="login"
        placeholder="Login"
        aria-label="Login"
        autoComplete="nickname"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        aria-label="Password"
        autoComplete="current-password"
        required
      />
      <fieldset>
        <label for="remember">
          <input type="checkbox" role="switch" id="remember" name="remember" />
          Remember me
        </label>
      </fieldset>
      <button onClick={clicked} className={pico.contrast}>Login</button>
    
  </div></article>)
}

const Dashboard = ({ brand, home, settings, login, header, children }) => {
  return (<Fragment>
    <BrowserRouter><Routes>
      <Route element={<Layout brand={brand} >{header}</Layout> }>
        <Route index element={<Page><App>{home}</App></Page>} />
        <Route path="/tour" element={<Page><Tour></Tour></Page>} />
        <Route path="/settings" element={<Page><Settings>{settings}</Settings></Page>} />
        <Route path="/login" element={<Page><Login>{login}</Login></Page>} />
        <Route path="/logout" element={<Page><Login>{login}</Login></Page>} />
        <Route path="/apikeys" element={<Page><ApiSettings></ApiSettings></Page>} />
        <Route path="/team" element={<Page><Team></Team></Page>} />
        <Route path="/forums" element={<Page><Forums></Forums></Page>} />
      </Route>
    </Routes></BrowserRouter>
  </Fragment>)
}

export {Dashboard, styles};