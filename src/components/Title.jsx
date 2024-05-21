/* eslint-disable react/prop-types */
const Title = ({ locked }) => {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Buy <b>PRO</b> for unlimited acces
        </span>
      ) : (
        'Fancy Counter'
      )}
    </h1>
  );
};

export default Title;
