import React from "react";

export function Card() {
	return (
		<div className="col-12 col-sm-6 col-md-3 my-auto my-md-0">
			<div className="card p-0 m-0 my-auto">
				<img
					src="https://mus.uy/landing/wp-content/uploads/2016/04/rada.jpg"
					className="card-img-top w-1000 "
					alt="..."
				/>
				<div className="card-body-fluid">
					<h5 className="card-title text-center">asd</h5>
					<p className="card-text text-center">
						Hello, can you hear me? I'm in California dreaming about
						who we used to be When we were younger and free I've
						forgotten how it felt before the world fell at our feet
					</p>
				</div>
				<div className="card-footer d-flex justify-content-center">
					<a href="adas" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}
