// import useFetch from "./ToggleEffects/useFetch";
// const url = "https://api.github.com/users/QuincyLarson";

// const FetchData = () => {
//   const { isLoading, isError, data: user } = useFetch(url);

//   //data:user alias  wherever data is it will also be looking for user
//   // order matters
//   // don't place user JSX before loading or error

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }
//   if (isError) {
//     return <h2>There was an error...</h2>;
//   }
//   const { avatar_url, name, company, bio } = user;
//   return (
//     <div>
//       <img
//         style={{ width: "100px", borderRadius: "25px" }}
//         src={avatar_url}
//         alt={name}
//       />
//       <h2>{name}</h2>
//       <h4>works at {company}</h4>
//       <p>{bio}</p>
//     </div>
//   );
// };
// export default FetchData;

//! useFetch

// import useFetchPerson from "./ToggleEffects/useFetchPerson";
// const url = "https://api.github.com/users/QuincyLarson";

// const FetchData = () => {
//   const { isLoading, isError, user } = useFetchPerson(url);

//   // order matters
//   // don't place user JSX before loading or error

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }
//   if (isError) {
//     return <h2>There was an error...</h2>;
//   }
//   const { avatar_url, name, company, bio } = user;
//   return (
//     <div>
//       <img
//         style={{ width: "100px", borderRadius: "25px" }}
//         src={avatar_url}
//         alt={name}
//       />
//       <h2>{name}</h2>
//       <h4>works at {company}</h4>
//       <p>{bio}</p>
//     </div>
//   );
// };
// export default FetchData;

//! Custom Hooks useToggle

// import useToggle from "./ToggleEffects/useToggle";

// const ToggleExample = () => {
//   const { show, toggle } = useToggle(true);
//   return (
//     <div>
//       <h4>toggle custom hook</h4>
//       <button className="btn" onClick={toggle}>
//         toggle
//       </button>
//       {show && <h4>some stuff</h4>}
//     </div>
//   );
// };
// export default ToggleExample;

//! useRef

// import { useEffect, useRef, useState } from "react";

// const UseRefBasics = () => {
//   const [value, setValue] = useState(0);

//   const refContainer = useRef(null);
//   const isMounted = useRef(false);
//   // console.log(refContainer);

//   useEffect(() => {
//     refContainer.current.focus();
//   });

//   useEffect(() => {
//     if (!isMounted.current) {
//       isMounted.current = true;
//       return;
//     }
//     console.log("re-render");
//   }, [value]);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = refContainer.current.value;
//     console.log(name);
//   };

//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="form-row">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="form-input"
//             ref={refContainer}
//           />
//         </div>
//         <button type="submit" className="btn btn-block">
//           submit
//         </button>
//       </form>
//       <h1>value : {value}</h1>
//       <button onClick={() => setValue(value + 1)} className="btn">
//         increase
//       </button>
//     </div>
//   );
// };

// export default UseRefBasics;

// //! FormData API

// import { useState } from "react";

// const UncontrolledInputs = () => {
//   const [value, setValue] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(e.currentTarget);
//     const formData = new FormData(e.currentTarget);
//     // console.log(formData);
//     // const email = formData.get("email");
//     // console.log(email);
//     // console.log([...formData.entries()]);
//     const newUser = Object.fromEntries(formData);
//     // new object instead of arrays
//     console.log(newUser);
//     //clear after submitting
//     setValue(value + 1);
//     e.currentTarget.reset();
//   };
//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <h4>Form Data API</h4>
//         {/* name */}
//         <div className="form-row">
//           <label htmlFor="name" className="form-label">
//             name
//           </label>
//           <input type="text" className="form-input" id="name" name="name" />
//         </div>
//         {/* email */}
//         <div className="form-row">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input type="email" className="form-input" id="email" name="email" />
//         </div>
//         {/* password */}
//         <div className="form-row">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-input"
//             id="password"
//             name="password"
//           />
//         </div>

//         <button type="submit" className="btn btn-block">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };
// export default UncontrolledInputs;

//! other inputs
// import { useState } from "react";

// const frameworks = ["react", "angular", "vue", "svelte"];

// const OtherInputs = () => {
//   const [shipping, setShipping] = useState(false);
//   const [framework, setFramework] = useState("react");

//   const handleShipping = (e) => {
//     console.log(e.target.checked);
//     setShipping(e.target.checked);
//   };

//   const handleFramework = (e) => {
//     console.log(e.target.value);
//     setShipping(e.target.value);
//   };

//   return (
//     <div>
//       <form className="form">
//         <h4>Other Inputs</h4>
//         {/* name */}
//         <div className="form-row" style={{ textAlign: "left" }}>
//           <label htmlFor="shipping"> Free Shipping </label>
//           <input
//             type="checkbox"
//             name="shipping"
//             id="shipping"
//             checked={shipping}
//             onChange={handleShipping}
//           />
//         </div>
//         <div className="form-row" style={{ textAlign: "left" }}>
//           <label htmlFor="framework" className="form-label">
//             Framework
//           </label>
//           <select
//             name="framework"
//             id="framework"
//             value={framework}
//             onChange={handleFramework}
//           >
//             {frameworks.map((framework) => {
//               return <option key={framework}>{framework}</option>;
//             })}
//           </select>
//         </div>
//         <button type="submit" className="btn btn-block">
//           submit
//         </button>
//       </form>
//     </div>
//   );
// };
// export default OtherInputs;

// multiple inputs

// import { useState } from "react";

// const MultipleInputs = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     console.log(e.target.name);
//     console.log(e.target.value);
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//    const handleSubmit = (e) => {
//     e.preventDefault()
//    console.log(user)
//    };

//   return (
//     <div>
//       <form className="form" onSubmit = {handleSubmit}>
//         <h4>Multiple Inputs</h4>
//         {/* name */}
//         <div className="form-row">
//           <label htmlFor="name" className="form-label">
//             name
//           </label>
//           <input
//             type="text"
//             className="form-input"
//             id="name"
//             value={user.name}
//             onChange={handleChange}
//             name="name"
//           />
//         </div>
//         {/* email */}
//         <div className="form-row">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-input"
//             id="email"
//             value={user.email}
//             onChange={handleChange}
//             name="email"
//           />
//         </div>
//         {/* email */}
//         <div className="form-row">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-input"
//             id="password"
//             value={user.password}
//             onChange={handleChange}
//             name="password"
//           />
//         </div>

//         <button type="submit" className="btn btn-block">
//           submit
//         </button>
//       </form>
//     </div>
//   );
// };
// export default MultipleInputs;

// import { useState } from "react";
// import { dataobjects } from "../data2";

// const UserChallenge = () => {
//   const [name, setName] = useState("");
//   const [users, setUsers] = useState(dataobjects);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name) return;
//     const fakeId = Date.now();

//     const newUser = { id: fakeId, name };
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);

//     //Es6 short {id:fakeId, name } same as {id:fakeId, name:name}
//     // if (!name || ! email)
//     setName("");
//   };

//   const removeUser = (id) => {
//     const updatedUsers = users.filter((person) => person.id !== id);
//     setUsers(updatedUsers);
//   };
//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <h4>Add User</h4>
//         <div className="form-row">
//           <label htmlFor="name" className="form-label">
//             name
//           </label>
//           <input
//             type="text"
//             className="form-input"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <button type="submit" className="btn btn-block">
//           submit
//         </button>
//       </form>
//       {/* render users below */}
//       <h4> users </h4>
//       {users.map((user) => {
//         return (
//           <div key={user.id}>
//             <h4> {user.name} </h4>
//             <button onClick={() => removeUser(user.id)} className="btn">
//               remove
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default UserChallenge;

// import { useState } from "react";

// const ControlledInputs = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // do something
//     console.log(name, email);
//   };
//   // this becomes anonymous function on onChange
//   //   const handleChange = (e) => {
//   //     // console.log(e.target.name);
//   //     // console.log(e.target.value);
//   //     setName(e.target.value);
//   //   };
//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <h4>controlled inputs</h4>
//       <div className="form-row">
//         <label htmlFor="name" className="form-label">
//           name
//         </label>
//         <input
//           type="text"
//           className="form-input"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="form-row">
//         <label htmlFor="email" className="form-label">
//           Email
//         </label>
//         <input
//           type="email"
//           className="form-input"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <button type="submit" className="btn btn-block">
//         submit
//       </button>
//     </form>
//   );
// };
// export default ControlledInputs;

// leveraging javascript import prop

// import { people } from "../data2";
// import Person from "./Pages/Person";

// const Test = () => {
//   return (
//     <div>
//       {people.map((person) => {
//         return <Person key={person.id} {...person} />;
//       })}
//     </div>
//   );
// };

// export default Test;

// import { useEffect, useState } from "react";

// const CleanupFunction = () => {
//   const [toggle, setToggle] = useState(false);
//   console.log("render");

//   return (
//     <div>
//       <button className="btn" onClick={() => setToggle(!toggle)}>
//         toggle
//       </button>
//       {toggle && <RandomComponents />}
//     </div>
//   );
// };

// const RandomComponents = () => {
//   console.log("render");
//   useEffect(() => {
//     const someFunc = () => {
//       // some logic
//     };
//     window.addEventListener("scroll", someFunc);
//     return () => {
//       window.removeEventListener("scroll", someFunc);
//       console.log("cleanup");
//     };
//   }, []);
//   return <div>hello world</div>;
// };

// export default CleanupFunction;

// cleanup function using useEffect
// import { useEffect, useState } from "react";

// const CleanupFunction = () => {
//   const [toggle, setToggle] = useState(false);
//   console.log("render");

//   return (
//     <div>
//       <button className="btn" onClick={() => setToggle(!toggle)}>
//         toggle
//       </button>
//       {toggle && <RandomComponents />}
//     </div>
//   );
// };

// const RandomComponents = () => {
//   console.log("render");
//   useEffect(() => {
//     const intId = setInterval(() => {
//       //   console.log("hello from interval");
//     }, 1000);
//     return () => {
//       clearInterval(intId);
//       console.log("cleanup");
//     };
//   }, []);
//   return <div>hello world</div>;
// };

// export default CleanupFunction;

// import { useState } from "react";

// const UserChallenge = () => {
//   const [user, setUser] = useState(null);

//   const login = () => {
//     setUser({ name: "Big Diesel" });
//   };

//   const logout = () => {
//     setUser(null);
//   };
//   return (
//     <div>
//       {user ? (
//         <div>
//           <h4> hello there {user.name} </h4>
//           <button className="btn" onClick={logout}>
//             logout
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h4> please login</h4>
//           <button className="btn" onClick={login}>
//             login
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserChallenge;

// import { useState } from "react";

// const ToggleChallenge = () => {
//   const [showAlert, setShowAlert] = useState(false);

//   //   const toggleAlert = () => {
//   //     if (showAlert) {
//   //       setShowAlert(false);
//   //       return;
//   //     }
//   //     setShowAlert(true);
//   //   };
//   return (
//     <div>
//       <button className="btn" onClick={() => setShowAlert(!showAlert)}>
//         {" "}
//         toggle{" "}
//       </button>
//       {showAlert && <Alert />}
//     </div>
//   );
// };

// const Alert = () => {
//   return <div className="alert alert-danger"> hello world </div>;
// };
// export default ToggleChallenge;

// import { useState } from "react";

// const ShortCircuitOverview = () => {
//   // falsey

//   const [text, setText] = useState("");
//   // truthy

//   const [name, setName] = useState("susan");
//   const [user, setUser] = useState({ name: "john" });
//   const [isEditing, setIsEditing] = useState(false);

//   //   Vanilla JS

//   // In JavaScript, short-circuit evaluation is a technique that
//   //allows you to use logical operators (such as && and ||) to perform conditional
//   //evaluations in a concise way.

//   // The && operator (logical AND) returns the first operand if it is "falsy",
//   // or the second operand if the first operand is "truthy".

//   return (
//     <div>
//       {/* {if(someCondition) {won't work}} */}
//       <h4> {text || "default value"} </h4>
//       {text && (
//         <div>
//           <h2> whatever return</h2>
//           <h2>{name}</h2>
//         </div>
//       )}
//       {user && <SomeComponent name={user.name} />}
//       <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
//       {/* inside element */}
//       <button className="btn">{isEditing ? "edit" : "add"}</button>
//       {/* toggle elements/components */}
//       {user ? (
//         <div>
//           <h4>hello there user {user.name}</h4>
//         </div>
//       ) : (
//         <div>
//           <h2>please login</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// const SomeComponent = ({ name }) => {
//   return (
//     <div>
//       <h4>hello there, {name}</h4>
//       <button className="btn">log out</button>
//     </div>
//   );
// };

// export default ShortCircuitOverview;

// truthy or falsey

// import { useState } from "react";

// const ShortCircuitOverview = () => {
//   // falsey

//   const [text, setText] = useState("");
//   // truthy

//   const [name, setName] = useState("susan");

//   return (
//     <div>
//       {/* {if(someCondition) {won't work}} */}
//       <h4> Falsy OR: {text || "hello world"} </h4>
//       <h4> Falsy AND: {text && "hello world"} </h4>
//       <h4> Truthy OR: {name || "hello world"} </h4>
//       <h4> Truthy AND: {name && "hello world"} </h4>
//     </div>
//   );
// };

// export default ShortCircuitOverview;

// Data fetching:

// 3 options
// -loading - waiting for data to arrive (display loading state)
// -error - there was an error (display error message)
// success - received data (display data )

// import { useEffect, useState } from "react";
// const url = "https://api.github.com/users/QuincyLarson";

// const MultipleReturnsFetchData = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const resp = await fetch(url);
//         if (!resp.ok) {
//           setIsError(true);
//           setIsLoading(false);
//           return;
//         }
//         const user = await resp.json();
//         setUser(user);
//       } catch (error) {
//         setIsError(true);
//         console.log(error);
//       }
//       setIsLoading(false);
//     };
//     fetchUser();
//   }, []);

//   if (isLoading) {
//     return <h2> Loading...</h2>;
//   }
//   if (isError) {
//     return <h2> There was an error..</h2>;
//   }
//   const { avatar_url, name, company } = user;
//   return (
//     <div>
//       <img
//         style={{ width: "150px", borderRadius: "25px" }}
//         src={avatar_url}
//         alt={name}
//       />
//       <h2> {name}</h2>
//       <h4> works at {company}</h4>
//     </div>
//   );
// };

// export default MultipleReturnsFetchData;

//conditional rendering

// import { useEffect, useState } from "react";

// const MultipleReturnsBasics = () => {
//   //

//   useEffect(() => {
//     setTimeout(() => {
//       // done fetching data
//       setIsLoading(false);
//     }, 3000);
//   });
//   const [isLoading, setIsLoading] = useState(true);

//   if (isLoading) {
//     return <h2> Loading...</h2>;
//   }

//   return <h2> Multiple Returns Basics </h2>;
// };

// export default MultipleReturnsBasics;

// fetch data

// import { useState, useEffect } from "react";

// const url = "https://data.binance.com/api/v3/ticker/24hr";

// const FetchData = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // you can also setup function outside
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const crypto = await response.json();
//         setUsers(crypto);
//         console.log(crypto);
//       } catch (error) {
//         console.log(error);
//       }

//       //   const response = await fetch(url);
//       //   const users = await response.json();
//       //   console.log(users);
//     };
//     fetchData();
//   }, []);

//   //   return <h2> fetch data example</h2>;
//   return (
//     <section>
//       <h3>github users</h3>
//       <ul className="users">
//         {users.map((user) => {
//           const { askPrice, askQty, symbol } = user;
//           return (
//             <li key={symbol}>
//               {/* <img src={} alt={login} /> */}
//               <div>
//                 <h4>{symbol}</h4>
//                 <h5>{askPrice}</h5>
//                 <a href={askQty}>profile</a>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };
// export default FetchData;

// import { useState, useEffect } from "react";

// const MultipleEffects = () => {
//   const [value, setValue] = useState(0);
//   const [secondValue, setSecondValue] = useState(0);

//   useEffect(() => {
//     console.log("hello from useEffect");
//   }, [value, secondValue]);

//   useEffect(() => {
//     console.log("hello from 2nd useEffect");
//   }, [secondValue]);

//   useEffect(() => {
//     // you can also setup function outside
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const users = await response.json();
//         setUsers(users);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1> {value}</h1>
//       <button type="button" className="btn" onClick={() => setValue(value + 1)}>
//         increase
//       </button>
//       <h1> {secondValue}</h1>
//       <button
//         type="button"
//         className="btn"
//         onClick={() => setSecondValue(secondValue + 1)}
//       >
//         increase
//       </button>
//     </div>
//   );
// };
// export default MultipleEffects;

// import { useState, useEffect } from "react";

// const UseEffectBasics = () => {
//   const [value, setValue] = useState(0);

//   const sayHello = () => {
//     console.log("hello there");
//   };

//   sayHello();
//   // useEffect runs on each re-render
//   // accept two arguments (second optional) the empty [] returns empty [] but without it returns console.log or first argument

//   useEffect(() => {
//     console.log("hello from useEffect");
//   }, []);
//   return (
//     <div>
//       <h1> {value}</h1>
//       <button type="button" className="btn" onClick={() => setValue(value + 1)}>
//         increase
//       </button>
//     </div>
//   );
// };
// export default UseEffectBasics;

// import { useState } from "react";

// const CodeExample = () => {
//   const [value, setValue] = useState(0);

//   const sayHello = () => {
//     console.log('hello there')
//   }

//   sayHello()
//   return (
//     <div>
//       <h1> {value}</h1>
//       <button type="button" className="btn" onClick={()=> setValue(value+1)}>
//         increase
//       </button>
//     </div>
//   );
// };
// export default CodeExample;

// import { useState } from "react";

// const UseStateGotcha = () => {
//   const [value, setValue] = useState(0);

//   const handleClick = () => {
//     setTimeout(() => {
//       console.log("clicked button");
//       setValue((currentState) => {
//         return currentState + 1;
//       });
//     }, 3000);
//   };
//   //   previously

//   //   setTimeout(() => {
//   //       console.log("clicked button");
//   //       setValue(value + 1);
//   //     }, 3000);
//   //   };
//   return (
//     <div>
//       <h1> {value}</h1>
//       <button type="button" className="btn" onClick={handleClick}>
//         increase
//       </button>
//     </div>
//   );
// };
// export default UseStateGotcha;

// import { useState } from "react";

// // js

// // if you want to update the state immediately and sync,
// //you can pass a function to setState that receives the previous state as
// // an argument and returns the new state. for example

// // setState((prevState) => {
// // return {...prevState, value: newValue }
// // })

// const UseStateGotcha = () => {
//   const [value, setValue] = useState(0);

//   const handleClick = () => {
//     setValue((currentState) => {
//       const newState = currentState + 1;
//       return newState;
//     });
//   };
//   return (
//     <div>
//       <h1> {value}</h1>
//       <button type="button" className="btn" onClick={handleClick}>
//         increase
//       </button>
//     </div>
//   );
// };
// export default UseStateGotcha;

// import { useState } from "react";

// const UseStateObject = () => {
//   const [person, setPerson] = useState({
//     name: "peter",
//     age: 24,
//     hobby: "read books",
//   });
//   //   const [name, setName] = useState("peter");
//   //   const [age, setAge] = useState(24);
//   //   const [hobby, setHobby] = useState("read books");

//   const displayPerson = () => {
//     setPerson({ ...person, name: "susan" });
//     //or this can also preserves values also destructured ({...}) = element
//     // setPerson({ name: "john", age: 28, hobby: " scream at the computer" });
//     // setName("joemama");
//     // setAge(55);
//     // setHobby("scream at the computer");
//     //
//   };
//   return (
//     <>
//       <h3>{person.name}</h3>
//       <h4> {person.age}</h4>
//       <h4> {person.hobby}</h4>
//       <button className="btn" onClick={displayPerson}>
//         show Joemama
//       </button>
//     </>
//   );
// };

// export default UseStateObject;

// import { useState } from "react";

// const UseStateObject = () => {
//   const [name, setName] = useState("peter");
//   const [age, setAge] = useState(24);
//   const [hobby, setHobby] = useState("read books");

//   const displayPerson = () => {
//     setName("joemama");
//     setAge(55);
//     setHobby("scream at the computer");
//   };
//   return (
//     <>
//       <h3>{name}</h3>
//       <h4> {age}</h4>
//       <h4> {hobby}</h4>
//       <button className="btn" onClick={displayPerson}>
//         show Joemama
//       </button>
//     </>
//   );
// };

// export default UseStateObject;

// Example 2

// import { dataobjects } from "../data2";
// import { useState } from "react";

// const Test = () => {
//   const [people, setPeople] = useState(dataobjects);

//   const removeItem = (id) => {
//     // console.log(id);
//     const newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople);
//   };

// //   to clear everything set array to empty
//   const clearAllItems = () => {
//     setPeople([]);
//   };
//   return (
//     <div>
//       {people.map((person) => {
//         const { id, name } = person;
//         return (
//           <div key={id}>
//             <h4>{name}</h4>
//             <button
//               type="button"
//               className="btn"
//               onClick={() => removeItem(id)}
//             >
//               {" "}
//               Remove me{" "}
//             </button>
//           </div>
//         );
//       })}
//       <button
//         type="button"
//         style={{ marginTop: "2rem" }}
//         className="btn"
//         onClick={clearAllItems}
//       >
//         {" "}
//         Clear All{" "}
//       </button>
//     </div>
//   );
// };

// export default Test;

// Example 1:
// import { useState } from "react";

// const StateBasic = () => {
//   const [count, setCount] = useState(0);

//   const handleClicker = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div className="title1">
//       <h4> You clicked {count} times </h4>
//       <button type="button" className="btn" onClick={handleClicker}>
//         {" "}
//         Click me{" "}
//       </button>
//     </div>
//   );
// };

// export default StateBasic;
