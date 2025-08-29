import { useState } from "react";
import PropTypes from "prop-types";
// import { console } from "console";

function PostForm({ post, headerText, buttonText, onSubmit }) {
  const [formData, setFormData] = useState(
    post || {
      title: "",
      body: "",
      image: null,
    }
  );

  return (
    <div>
      <h2>{headerText}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        <div>
          <label htmlFor="titleInput">Title:</label>
          <input
            type="text"
            id="post-title"
            value={formData.title}
            onChange={(e) => {
              console.log(e.target.value);
              setFormData({ ...formData, title: e.target.value });
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="titleInput">Image:</label>
          <input
            type="file"
            id="post-title"
            accept="image/*"
            // value={formData.image}
            onChange={(e) => {
              setFormData({ ...formData, image: e.target.files[0] });
              // image: e.target.value = URL.createObjectURL(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="bodyInput">Body:</label>
          <textarea
            value={formData.body}
            id="post-body"
            onChange={(e) => {
              setFormData({ ...formData, body: e.target.value });
            }}
            required
          />
        </div>
        <div>
          <button type="submit">{buttonText}</button>
        </div>
        <div>
          {formData.id && (
            <button
              type="button"
              onClick={() => {
                setFormData({
                  title: "",
                  body: "",
                });
              }}
            >
              Clear
            </button>
          )}
        </div>
        <div>
          {/* <button type="submit">{buttonText}</button>
          <button type="button" onClick={() => {}}>
            Cancel
          </button>
          {formData.id && (
            <button
              type="button"
              onClick={() => {
                onDelete(formData.id);
              }}
            >
              Delete
            </button>
          )}
          ; */}
        </div>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  headerText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

PostForm.defaultProps = {
  post: null,
};

export default PostForm;

// return (
//     <form>
//       <input
//         type="text"
//         placeholder="title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//       />
//     </form>
//   );

// import { useState } from "react";
// import PropTypes from "prop-types";

// function PostForm({ post, headerText, onSubmit, buttonText }) {
//   const [formData, setFormData] = useState(
//     post || {
//       title: "",
//       body: "",
//       image: "",
//     }
//   );

//   return (
//     <div>
//       <h2>{headerText}</h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onSubmit(formData);
//         }}
//       >
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             id="title"
//             type="text"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 title: e.target.value,
//               })
//             }
//           />
//         </div>
//         <div>
//           <label htmlFor="image">Image:</label>
//           <input
//             id="image"
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               setFormData({
//                 ...formData,
//                 image: e.target.files[0],
//               });
//               console.log(e.target.files[0]);
//             }}
//           />
//         </div>
//         <div>
//           <label htmlFor="body">Body:</label>
//           <textarea
//             id="body"
//             value={formData.body}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 body: e.target.value,
//               })
//             }
//           />
//         </div>
//         <div>
//           <button type="submit">{buttonText}</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// PostForm.propTypes = {
//   post: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//   }),
//   headerText: PropTypes.string.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   buttonText: PropTypes.string.isRequired,
// };

// PostForm.defaultProps = {
//   post: null,
// };

// export default PostForm;
