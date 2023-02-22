import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CheckboxesComponent(categories: any, filtersHandle: any) {

    const handleChange=(id:string)=>{

    }

  return (
    <>
      {categories.map((category:any, i:any) => (
        <InputGroup className="mb-3" key={i}>
          <Form.Label>{category.name}</Form.Label>
          <InputGroup.Checkbox
            aria-label="Checkbox for following text input"
            onChange={handleChange(category.id)}
          />
          <Form.Control aria-label="Text input with checkbox" />
        </InputGroup>
      ))}
    </>
  );
}

export default CheckboxesComponent;
