import React from 'react';
import {Accordion} from 'react-bootstrap'

const Asking = ()=>{

    return(
<section >
    <h1 className='text-center my-3'>Frequently Asked Questions</h1>
<Accordion className='row'>
    <Accordion.Item eventKey="0" className='col-md-6'>
        <Accordion.Header>Is A diet fitnees Bread really baked fresh each day?</Accordion.Header>
        <Accordion.Body>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1" className='col-md-6'>
        <Accordion.Header> Can I order your products online? </Accordion.Header>
        <Accordion.Body>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</Accordion.Body>
    </Accordion.Item>
      <Accordion.Item eventKey="2" className='col-md-6'>
        <Accordion.Header> Do you bake breads containing animal fats or products? </Accordion.Header>
        <Accordion.Body>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3" className='col-md-6'>
        <Accordion.Header> ~ When are you opening a shop near me?</Accordion.Header>
        <Accordion.Body>
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</Accordion.Body>
    </Accordion.Item>

    </Accordion>
</section>
    )
}
export default Asking