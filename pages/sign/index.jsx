const Sign = () => {
  return (
    <div className="container-xxl d-flex align-items-center justify-content-center flex-column">
      <h3>iCorn ID</h3>
      <h2>
        You don’t have an iCorn ID? <span>Sign it here.</span>
      </h2>

      <style jsx>{`
        h3 {
          font-weight: 600;
          font-size: 40px;
          line-height: 48px;

          color: #000000;
          margin-top: 3rem;
        }
        h2 {
          margin-top: 1rem;
          font-weight: 600;
          color: #000000;
        }
        h2 span {
          font-weight: 600;
          color: #0066cc;
        }
      `}</style>
    </div>
  );
};

export default Sign;
