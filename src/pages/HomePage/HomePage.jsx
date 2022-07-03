import React, { useState } from 'react'
import Header from '../../components/Header'
import './HomePage.scss';
import { MdSearch, MdArrowRightAlt } from "react-icons/md";


{/* TODO: fix srcset conf */ }

function HomePage() {
	const [mostSearchBreedsCount, setMostSearchBreedsCount] = useState(66);
	const [mostSearchBreeds, setMostSearchBreeds] = useState([]);
	const [mostSearchBreedsWithLimit4, setMostSearchBreedsWithLimit4] = useState([
		{
			name: "Bengal",
			url: "https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg",
		},
		{
			name: "Ragdoll",
			url: "https://cdn2.thecatapi.com/images/83htMb1AJ.jpg",
		},
		{
			name: "Bengal",
			url: "https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg",
		},
		{
			name: "Ragdoll",
			url: "https://cdn2.thecatapi.com/images/83htMb1AJ.jpg",
		}
	]);
	const [whyHaveCatPictures, setWhyHaveCatPictures] = useState([
		"https://media.istockphoto.com/photos/european-short-haired-cat-picture-id1072769156?k=20&m=1072769156&s=612x612&w=0&h=k6eFXtE7bpEmR2ns5p3qe_KYh098CVLMz4iKm5OuO6Y=",
		"https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
		"https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg"
	]);

	return (
		<div className='flex flex-col gap-10'>
			<Header />
			<section>

				{/* BREEDS SEARCH */}

				<div className='container-breeds-search'>
					<img className='rounded-t-3xl' src="./images/HeroImagesm.png" alt="picture of cat"
						srcset="
						./images/HeroImagemd.png 640w,
						./images/HeroImagelg.png 1024w,"
					/>
					<div className='breeds-search'>
						<h1 className="breeds-search__heading">CatWiki</h1>
						<p className='breeds-search__description'>Get to know more about your cat breed</p>
						<div className='breeds-search__container-input'>
							<input className='font-medium bg-white' type="text" placeholder='Search' />
							<MdSearch className='breeds-search__container-input__svg' />
						</div>
					</div>
				</div>

				{/* MOST SEARCHED BREEDS */}

				<div className='bg-[#E3E1DC] flex flex-col gap-3 sm:gap-6 rounded-b-3xl p-responsive'>
					<h2 className='most-searched-breeds__heading'>Most Searched Breeds</h2>
					<div className='flex items-center justify-between'>
						<p className='most-searched-breeds__description'>{mostSearchBreedsCount}+ Breeds For you to discover</p>
						<a className='hidden text-[#29150799] sm:flex items-center gap-2' href="">
							<span className='uppercase md:text-lg md:font-bold'>see more</span>
							<MdArrowRightAlt className='min-w-[14px]' size={24} />
						</a>
					</div>

					{/* GRID OF CATS */}
					<ul className='most-searched-breeds__gallery'>
						{mostSearchBreedsWithLimit4.map(it =>
							<li>
								<article className='flex flex-col gap-3 md:max-w-[200px]'>
									<div className='container-ratio-1-1'>
										<img className='child-ratio rounded-xl' src={`${it.url}`} alt="" />
									</div>
									<h2 className='font-semibold text-xs'>{it.name}</h2>
								</article>
							</li>
						)}
					</ul>
				</div>
			</section>
			<section className='flex flex-col gap-8 sm:flex-row sm:gap-2'>

				{/* WHY BLOCK */}
				<div className='flex flex-col gap-4 max-w-lg'>
					<h2 className='font-bold text-lg md:text-2xl heading-top-before'>Why should you have a cat?</h2>
					<p className='font-medium sm:text-lg'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
					<a className='hidden text-[#29150799] sm:flex items-center gap-2' href="">
						<span className='uppercase md:text-lg md:font-bold'>read more</span>
						<MdArrowRightAlt className='min-w-[14px]' size={24} />
					</a>
				</div>

				{/* MASOUNRY GALLERY */}

				<div className='container-whyhavecatgrid sm:min-w-[400px] md:max-w-3xl'>
					<div className='container-whyhavecatgrid__first'>
						<div className='h-full max-w-[100%] rounded-xl bg-orange-300 flex'>
							<img className='image-cover rounded-xl' src="https://media.istockphoto.com/photos/european-short-haired-cat-picture-id1072769156?k=20&m=1072769156&s=612x612&w=0&h=k6eFXtE7bpEmR2ns5p3qe_KYh098CVLMz4iKm5OuO6Y=" alt="" />
						</div>
					</div>
					<div className='container-whyhavecatgrid__second'>
						<div className='h-full max-w-[100%] rounded-xl'>
							<img className='image-cover rounded-xl max-h-[80%]' src="https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg" alt="" />
						</div>
					</div>
					<div className='container-whyhavecatgrid__third'>
						<div className='h-full max-w-[75%] flex ml-auto rounded-xl'>
							<img className='image-cover rounded-xl' src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg" alt="" />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomePage