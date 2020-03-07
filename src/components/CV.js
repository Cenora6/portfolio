import React, {Component} from 'react';
import pdf from '../files/resume.pdf'

class CV extends Component {

    render() {
        return (
            <div className='cv'>
                <span>Ciriculum</span>
                <span>Vitae</span>
                <span><a href={pdf}>EN</a></span>
                <span><a href={pdf}>PL</a></span>
            </div>
        )
    }
}

export default CV;