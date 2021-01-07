import React from 'react'
import { useForm } from 'react-hook-form';

const Filters = () => {

  
    const onSubmit = async data => {
        await console.log(data);
        // reset();
      };

    const { register, handleSubmit, errors } = useForm(); // initialize the hook

    return (
        <div className="mb-3">
            <button className="btn btn-outline-secondary float-right mb-3" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i className="fa fa-filter" aria-hidden="true">&nbsp; Filters </i>
            </button>
            <div className="collapse mt-2 w-100" id="collapseExample">
                <div className="card card-body w-100">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <button type="submit" >Submit</button>
                        <button type="submit"  className="btn btn-md btn-block btn-danger-gradiant w-25 text-white border-0 ">
          
                        </button>
                    </form>
            </div>
        </div>
        </div >
    )
}

export default Filters;