const RadioboxesComponent=({ categories,filterHandle }: any)=> {

  const handleChange = (e:any) => {
    filterHandle(e.target.value);
  };

  return (
    <>
      {categories.map((category: any, i: any) => (
        <div key={i}>
          <input
            name={category}
            onChange={handleChange}
            type="radio"
            value={category.key}
            className="mr-2 ml-4"
          />
          <label className="form-check-label">{category.value}</label>
        </div>
      ))}
    </>
  );
}

export default RadioboxesComponent;
