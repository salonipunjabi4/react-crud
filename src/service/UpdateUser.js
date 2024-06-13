// import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";

// class UpdateUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userId: this.props.match.params.userId,
//       name: "",
//       email: "",
//       mobile: "",
//       gender: "",
//       age: 0,
//       nationality: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     fetch(`/users/${this.state.id}`)
//       .then((response) => response.json())
//       .then((data) => this.setState(data))
//       .catch((error) => console.error("Error fetching customer:", error));
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     const { userId, name, email, mobile, gender, age, nationality } =
//       this.state;
//     fetch(`/users/updateUser/{id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId,
//         name,
//         email,
//         mobile,
//         gender,
//         age,
//         nationality,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network error");
//         }
//         return response.json();
//       })
//       .then((updatedUser) => {
//         this.props.history.push("/users");
//       })
//       .catch((error) => console.error("Error updating customer: ", error));
//   }

//   render() {
//     return (
//       <div>
//         <h2>Update Customer</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={this.handleChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={this.handleChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Mobile:
//               <input
//                 type="text"
//                 name="mobile"
//                 value={mobile}
//                 onChange={this.handleChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Gender:
//               <input
//                 type="text"
//                 name="gender"
//                 value={gender}
//                 onChange={this.handleChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Age:
//               <input
//                 type="number"
//                 name="age"
//                 value={age}
//                 onChange={this.handleChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Nationality:
//               <input
//                 type="text"
//                 name="nationality"
//                 value={nationality}
//                 onChange={this.handleChange}
//               />
//             </label>
//           </div>
//           <button type="submit">Update Customer</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default withRouter(UpdateUser);
