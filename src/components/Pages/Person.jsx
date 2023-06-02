// part of leveraging javascript

// import avatar from "../../assets/default-avatar.svg";
// import PropTypes from "prop-types";

// const Person = ({ name, nickName = "shakeAndBake", images }) => {
//   const img = images?.[0]?.small?.url || avatar;
//   return (
//     <div>
//       <img src={img} alt={name} style={{ width: "50px" }} />
//       <h4>{name}</h4>
//       <p>Nickname: {nickName}</p>
//     </div>
//   );
// };

// Person.propTypes = {
//   name: PropTypes.string.isRequired,
//   nickName: PropTypes.string,
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       small: PropTypes.shape({
//         url: PropTypes.string,
//       }),
//     })
//   ),
// };

// export default Person; // Corrected export statement

// import avatar from "../../assets/default-avatar.svg";
// import PropTypes from "prop-types";

// const Person = ({ name, nickName = "shakeAndBake", images }) => {
//   // before optional chaining

//   // const img =
//   //   (images && images[0] && images[0].small && images[0].small.url) || avatar;
//   const img = images?.[0]?.small?.url || avatar;
//   return (
//     <div>
//       <img src={img} alt={name} style={{ width: "50px" }} />
//       <h4>{name} </h4>
//       <p>Nickname : {nickName}</p>
//     </div>
//   );
// };

// Person.propTypes = {
//   name: PropTypes.string.isRequired,
//   nickName: PropTypes.string,
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       small: PropTypes.shape({
//         url: PropTypes.string,
//       }),
//     })
//   ),
// };

// export default Person;
