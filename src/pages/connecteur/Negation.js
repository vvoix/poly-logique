import React from 'react';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Button from '@restart/ui/esm/Button';
import { Collapse } from 'react-bootstrap';

const Negation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navigation />
      Négation
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
      );
    </div>
  );
};

export default Negation;
