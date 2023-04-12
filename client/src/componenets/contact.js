import React from 'react'

export default function () {
  return (
    <>
        <div className="container pt-3">
            <h2 className="text-center">Contact Us</h2>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 pb-5 pt-5">

                            <form action="" method="">
                                    <div className="card-body p-3">

                                        <div className="form-group">
                                            <div className="input-group mb-2">
                                                <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Name" required/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-2">
                                                <input type="email" className="form-control" id="nombre" name="email" placeholder="email@gmail.com" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group mb-2">
                                                <textarea className="form-control" placeholder="Tell me about your Self" required></textarea>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <input type="submit" value="Submit it." className="btn btn-info btn-block rounded-0 py-2"/>
                                        </div>
                                    </div>
                            </form>
                        </div>
            </div>
        </div>
    
    </>
  )
}
