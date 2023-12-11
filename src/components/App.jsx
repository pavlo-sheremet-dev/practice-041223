import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <section>
              <h1>HOME</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                officiis enim accusantium. Odit corrupti iste numquam, molestiae
                nulla nostrum quas?
              </p>
            </section>
          }
        />
        <Route
          path="/contacts"
          element={
            <section>
              <h1>Contacts</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente rerum, cum, odit quas, est perferendis molestias
              </p>

              <Link to="/contacts">Telegram</Link>
              <Link to="/contacts/email">Email</Link>
              <Outlet />
            </section>
          }
        >
          <Route
            index
            element={
              <section>
                <h2>Telegram</h2>
                <div>@telegram_account</div>
              </section>
            }
          />
          <Route
            path={'/contacts/email'}
            element={
              <section>
                <h2>Email</h2>
                <div>email@mail.com</div>
              </section>
            }
          />
        </Route>
        <Route
          path="/about"
          element={
            <section>
              <h1>ABOUT US</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                cum. Officia nihil quos iure, autem ex tempore, quidem mollitia
                unde ipsam molestiae aperiam. Ut fuga, quam sequi consequatur
                quod accusantium possimus sapiente soluta error, corrupti
                blanditiis corporis minus et quaerat earum at culpa, sunt amet
                esse facere? Quos, quam molestiae.
              </p>
            </section>
          }
        />
      </Route>
    </Routes>
  );
};

const RootLayout = () => {
  return (
    <div>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
};
