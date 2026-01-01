// const todayBtn = document.querySelector(".today");
// const lunchBtn = document.querySelector(".luncher");
// const plantesBtn = document.querySelector(".planets");

// const todaySection = document.querySelector(".today-in-space");
// const launchesSection = document.querySelector(".launches");
// const plantesSection = document.querySelector(".planets");

// function showSection(section) {
//   todaySection.classList.add("hidden");
//   launchesSection.classList.add("hidden");
//   plantesSection.classList.add("hidden");

//   section.classList.remove("hidden");
// }

// todayBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   showSection(todaySection);
//   getTodaySpace();
// });

// lunchBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   showSection(launchesSection);
//   getLaunches();
// });

// plantesBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   showSection(plantesSection);
//   getPlantes()
// });

// var apodData;
// (async function getTodaySpace() {
//   try {
//     const response = await fetch(
//       "https://api.nasa.gov/planetary/apod?api_key=7schi7moHN1eewSUoBPKba0FtUal6KRvI9a1uowR"
//     );

//     apodData = await response.json();
//     displayTodaySpace(apodData);
//   } catch (error) {
//     console.error(error);
//   }
// })();
// function displayTodaySpace(data) {
//   var cartonaa = `
//   <div class="max-w-7xl mx-auto">
//     <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
//       <div>
//         <h2 class="text-xl md:text-2xl font-bold mb-1">
//           Today in Space
//         </h2>
//         <p class="text-slate-400 text-sm">
//           Astronomy Picture of the Day - ${data.date}
//         </p>
//       </div>
//     </div>

//     <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
//       <div class="xl:col-span-2">
//         <div class="rounded-2xl overflow-hidden h-[400px] bg-slate-800">
//           ${
//             data.media_type === "image"
//               ? `<img src="${data.url}" class="w-full h-full object-cover" />`
//               : `<iframe src="${data.url}" class="w-full h-full"></iframe>`
//           }
//         </div>
//       </div>

//       <div class="space-y-6">
//         <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
//           <h3 class="text-xl font-semibold mb-3">
//             ${data.title}
//           </h3>

//           <p class="text-slate-300 leading-relaxed mb-4">
//             ${data.explanation}
//           </p>

//           ${
//             data.copyright
//               ? `<p class="text-xs text-slate-400 italic">
//                   © ${data.copyright}
//                 </p>`
//               : ""
//           }
//         </div>

//         <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
//           <h4 class="font-semibold mb-3">Image Details</h4>
//           <div class="space-y-2 text-sm">
//             <div class="flex justify-between">
//               <span class="text-slate-400">Date</span>
//               <span>${data.date}</span>
//             </div>
//             <div class="flex justify-between">
//               <span class="text-slate-400">Media Type</span>
//               <span>${data.media_type}</span>
//             </div>
//             <div class="flex justify-between">
//               <span class="text-slate-400">Source</span>
//               <span>NASA APOD</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   `;

//   document.querySelector(".today-in-space").innerHTML = cartonaa;
// }

// var launches;
// async function getLaunches() {
//   try {
//     const response = await fetch(
//       "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10"
//     );

//     const data = await response.json();
//     displayLunchers(data.results);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function displayLunchers(data) {
//   var cartonaa = `     <div class="mb-6 md:mb-8">
//             <h2 class="text-2xl md:text-3xl font-space font-bold mb-2">
//               Upcoming Launches
//             </h2>
//             <p class="text-slate-400 text-sm md:text-base">
//               Real-time tracking of the next missions to space
//             </p>
//           </div>
//           <div id="featured-launch" class="mb-8">
//             <!-- STATIC FEATURED LAUNCH -->
//             <div
//               class="relative bg-slate-800/30 border border-slate-700 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all"
//             >
//               <div
//                 class="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
//               ></div>
//               <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
//                 <div class="flex flex-col justify-between">
//                   <div>
//                     <div class="flex items-center gap-3 mb-4">
//                       <span
//                         class="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2"
//                       >
//                         <i class="fas fa-star"></i>
//                         Featured Launch
//                       </span>
//                       <span
//                         class="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold"
//                       >
//                         Go
//                       </span>
//                     </div>
//                     <h3 class="text-3xl font-bold mb-3 leading-tight">
//                       Starship Flight 3
//                     </h3>
//                     <div
//                       class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400"
//                     >
//                       <div class="flex items-center gap-2">
//                         <i class="fas fa-building"></i>
//                         <span>SpaceX</span>
//                       </div>
//                       <div class="flex items-center gap-2">
//                         <i class="fas fa-rocket"></i>
//                         <span>Starship</span>
//                       </div>
//                     </div>
//                     <div
//                       class="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6"
//                     >
//                       <i class="fas fa-clock text-2xl text-blue-400"></i>
//                       <div>
//                         <p class="text-2xl font-bold text-blue-400">2</p>
//                         <p class="text-xs text-slate-400">Days Until Launch</p>
//                       </div>
//                     </div>
//                     <div class="grid xl:grid-cols-2 gap-4 mb-6">
//                       <div class="bg-slate-900/50 rounded-xl p-4">
//                         <p
//                           class="text-xs text-slate-400 mb-1 flex items-center gap-2"
//                         >
//                           <i class="fas fa-calendar"></i>
//                           Launch Date
//                         </p>
//                         <p class="font-semibold">March 14, 2024</p>
//                       </div>
//                       <div class="bg-slate-900/50 rounded-xl p-4">
//                         <p
//                           class="text-xs text-slate-400 mb-1 flex items-center gap-2"
//                         >
//                           <i class="fas fa-clock"></i>
//                           Launch Time
//                         </p>
//                         <p class="font-semibold">12:00 PM UTC</p>
//                       </div>
//                       <div class="bg-slate-900/50 rounded-xl p-4">
//                         <p
//                           class="text-xs text-slate-400 mb-1 flex items-center gap-2"
//                         >
//                           <i class="fas fa-map-marker-alt"></i>
//                           Location
//                         </p>
//                         <p class="font-semibold text-sm">Starbase, Texas</p>
//                       </div>
//                       <div class="bg-slate-900/50 rounded-xl p-4">
//                         <p
//                           class="text-xs text-slate-400 mb-1 flex items-center gap-2"
//                         >
//                           <i class="fas fa-globe"></i>
//                           Country
//                         </p>
//                         <p class="font-semibold">USA</p>
//                       </div>
//                     </div>
//                     <p class="text-slate-300 leading-relaxed mb-6">
//                       The third integrated flight test of Starship. The
//                       prototype for the heavy-lift launch vehicle is currently
//                       being built by SpaceX.
//                     </p>
//                   </div>
//                   <div class="flex flex-col md:flex-row gap-3">
//                     <button
//                       class="flex-1 self-start md:self-center px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2"
//                     >
//                       <i class="fas fa-info-circle"></i>
//                       View Full Details
//                     </button>
//                     <div class="icons self-end md:self-center">
//                       <button
//                         class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
//                       >
//                         <i class="far fa-heart"></i>
//                       </button>
//                       <button
//                         class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
//                       >
//                         <i class="fas fa-bell"></i>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="relative">
//                   <div
//                     class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50"
//                   >
//                     <!-- Placeholder image/icon since we can't load external images reliably without correct URLs -->
//                     <div
//                       class="flex items-center justify-center h-full min-h-[400px] bg-slate-800"
//                     >
//                       <i class="fas fa-rocket text-9xl text-slate-700/50"></i>
//                     </div>
//                     <div
//                       class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="mb-6">
//             <h3 class="text-xl font-semibold mb-4">All Upcoming Launches</h3>
//           </div>
//           <div
//             id="launches-grid"
//             class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             <!-- STATIC LAUNCH CARD 1 -->
//             <div
//               class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer"
//             >
//               <div
//                 class="relative h-48 bg-slate-900/50 flex items-center justify-center"
//               >
//                 <i class="fas fa-space-shuttle text-5xl text-slate-700"></i>
//                 <div class="absolute top-3 right-3">
//                   <span
//                     class="px-3 py-1 bg-green-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold"
//                   >
//                     Go
//                   </span>
//                 </div>
//               </div>
//               <div class="p-5">
//                 <div class="mb-3">
//                   <h4
//                     class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
//                   >
//                     Falcon 9 Block 5 | Starlink Group 6-44
//                   </h4>
//                   <p class="text-sm text-slate-400 flex items-center gap-2">
//                     <i class="fas fa-building text-xs"></i>
//                     SpaceX
//                   </p>
//                 </div>
//                 <div class="space-y-2 mb-4">
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-calendar text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Mar 15, 2024</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-clock text-slate-500 w-4"></i>
//                     <span class="text-slate-300">23:00 UTC</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-rocket text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Falcon 9</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
//                     <span class="text-slate-300 line-clamp-1">KSC, LC-39A</span>
//                   </div>
//                 </div>
//                 <div
//                   class="flex items-center gap-2 pt-4 border-t border-slate-700"
//                 >
//                   <button
//                     class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold"
//                   >
//                     Details
//                   </button>
//                   <button
//                     class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
//                   >
//                     <i class="far fa-heart"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <!-- STATIC LAUNCH CARD 2 -->
//             <div
//               class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer"
//             >
//               <div
//                 class="relative h-48 bg-slate-900/50 flex items-center justify-center"
//               >
//                 <i class="fas fa-rocket text-5xl text-slate-700"></i>
//                 <div class="absolute top-3 right-3">
//                   <span
//                     class="px-3 py-1 bg-yellow-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold"
//                   >
//                     TBC
//                   </span>
//                 </div>
//               </div>
//               <div class="p-5">
//                 <div class="mb-3">
//                   <h4
//                     class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
//                   >
//                     Electron | "Owl Night Long"
//                   </h4>
//                   <p class="text-sm text-slate-400 flex items-center gap-2">
//                     <i class="fas fa-building text-xs"></i>
//                     Rocket Lab
//                   </p>
//                 </div>
//                 <div class="space-y-2 mb-4">
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-calendar text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Mar 16, 2024</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-clock text-slate-500 w-4"></i>
//                     <span class="text-slate-300">09:15 UTC</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-rocket text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Electron</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
//                     <span class="text-slate-300 line-clamp-1"
//                       >Mahia Peninsula, NZ</span
//                     >
//                   </div>
//                 </div>
//                 <div
//                   class="flex items-center gap-2 pt-4 border-t border-slate-700"
//                 >
//                   <button
//                     class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold"
//                   >
//                     Details
//                   </button>
//                   <button
//                     class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
//                   >
//                     <i class="far fa-heart"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <!-- STATIC LAUNCH CARD 3 -->
//             <div
//               class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer"
//             >
//               <div
//                 class="relative h-48 bg-slate-900/50 flex items-center justify-center"
//               >
//                 <i class="fas fa-satellite-dish text-5xl text-slate-700"></i>
//                 <div class="absolute top-3 right-3">
//                   <span
//                     class="px-3 py-1 bg-blue-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold"
//                   >
//                     TBD
//                   </span>
//                 </div>
//               </div>
//               <div class="p-5">
//                 <div class="mb-3">
//                   <h4
//                     class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
//                   >
//                     Ariane 6 | Maiden Flight
//                   </h4>
//                   <p class="text-sm text-slate-400 flex items-center gap-2">
//                     <i class="fas fa-building text-xs"></i>
//                     Arianespace
//                   </p>
//                 </div>
//                 <div class="space-y-2 mb-4">
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-calendar text-slate-500 w-4"></i>
//                     <span class="text-slate-300">June 2024</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-clock text-slate-500 w-4"></i>
//                     <span class="text-slate-300">TBD</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-rocket text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Ariane 62</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
//                     <span class="text-slate-300 line-clamp-1"
//                       >Guiana Space Centre</span
//                     >
//                   </div>
//                 </div>
//                 <div
//                   class="flex items-center gap-2 pt-4 border-t border-slate-700"
//                 >
//                   <button
//                     class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold"
//                   >
//                     Details
//                   </button>
//                   <button
//                     class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
//                   >
//                     <i class="far fa-heart"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
         
     
//   `;

//   document.querySelector(".launches").innerHTML = cartonaa;
// }

// var plantes;
// async function getPlantes() {
//   try {
//     const response = await fetch(
//       "https://solar-system-opendata-proxy.vercel.app/api/planets"
//     );

//     const data = await response.json();
//     displayPlantes(data.results);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function displayPlantes(data) {
//   var cartonaa = `     <div class="mb-6 md:mb-8">
//             <h2 class="text-2xl md:text-3xl font-space font-bold mb-2">
//               Upcoming Launches
//             </h2>
//             <p class="text-slate-400 text-sm md:text-base">
//               Real-time tracking of the next missions to space
//             </p>
//           </div>
//           <div id="featured-launch" class="mb-8">
//             <!-- STATIC FEATURED LAUNCH -->
//             <div
//               class="relative bg-slate-800/30 border border-slate-700 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all"
//             >
//               <div
//                 class="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
//               ></div>
//               <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
//                 <div class="flex flex-col justify-between">
//                   <div>
//                     <div class="flex items-center gap-3 mb-4">
//                       <span
//                         class="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2"
//                       >
//                         <i class="fas fa-star"></i>
//                         Featured Launch
//                       </span>
//                       <span
//                         class="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold"
//                       >
//                         Go
//                       </span>
//                     </div>
//                     <h3 class="text-3xl font-bold mb-3 leading-tight">
//                       Starship Flight 3
//                     </h3>
//                     <div
//                       class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400"
//                     >
//                       <div class="flex items-center gap-2">
//                         <i class="fas fa-building"></i>
//                         <span>SpaceX</span>
//                       </div>
//                       <div class="flex items-center gap-2">
//                         <i class="fas fa-rocket"></i>
//                         <span>Starship</span>
//                       </div>
//                     </div>
//                     <div
//                       class="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6"
//                     >
//                       <i class="fas fa-clock text-2xl text-blue-400"></i>
//                       <div>
//                         <p class="text-2xl font-bold text-blue-400">2</p>
//                         <p class="text-xs text-slate-400">Days Until Launch</p>
//                       </div>
//                     </div>
//                     <div class="grid xl:grid-cols-2 gap-4 mb-6">
//                       <div class="bg-slate-900/50 rounded-xl p-4">
//                         <p
//                           class="text-xs text-slate-400 mb-1 flex items-center gap-2"
//                         >
//                           <i class="fas fa-calendar"></i>
//                           Launch Date
//                         </p>
//                         <p class="font-semibold">March 14, 2024</p>
//                       </div>
//                       <div class="bg-slate-900/50 rounded-xl p-4">
//                         <p
//                           class="text-xs text-slate-400 mb-1 flex items-center gap-2"
//                         >
//                           <i class="fas fa-clock"></i>
//                           Launch Time
//                         </p>
//                         <p class="font-semibold">12:00 PM UTC</p>
//                       </div>
//                       <div class="bg-slate-900/50 rounded-xl p-4">
//                         <p
//                           class="text-xs text-slate-400 mb-1 flex items-center gap-2"
//                         >
//                           <i class="fas fa-map-marker-alt"></i>
//                           Location
//                         </p>
//                         <p class="font-semibold text-sm">Starbase, Texas</p>
//                       </div>
//                       <div class="bg-slate-900/50 rounded-xl p-4">
//                         <p
//                           class="text-xs text-slate-400 mb-1 flex items-center gap-2"
//                         >
//                           <i class="fas fa-globe"></i>
//                           Country
//                         </p>
//                         <p class="font-semibold">USA</p>
//                       </div>
//                     </div>
//                     <p class="text-slate-300 leading-relaxed mb-6">
//                       The third integrated flight test of Starship. The
//                       prototype for the heavy-lift launch vehicle is currently
//                       being built by SpaceX.
//                     </p>
//                   </div>
//                   <div class="flex flex-col md:flex-row gap-3">
//                     <button
//                       class="flex-1 self-start md:self-center px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2"
//                     >
//                       <i class="fas fa-info-circle"></i>
//                       View Full Details
//                     </button>
//                     <div class="icons self-end md:self-center">
//                       <button
//                         class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
//                       >
//                         <i class="far fa-heart"></i>
//                       </button>
//                       <button
//                         class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
//                       >
//                         <i class="fas fa-bell"></i>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="relative">
//                   <div
//                     class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50"
//                   >
//                     <!-- Placeholder image/icon since we can't load external images reliably without correct URLs -->
//                     <div
//                       class="flex items-center justify-center h-full min-h-[400px] bg-slate-800"
//                     >
//                       <i class="fas fa-rocket text-9xl text-slate-700/50"></i>
//                     </div>
//                     <div
//                       class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="mb-6">
//             <h3 class="text-xl font-semibold mb-4">All Upcoming Launches</h3>
//           </div>
//           <div
//             id="launches-grid"
//             class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             <!-- STATIC LAUNCH CARD 1 -->
//             <div
//               class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer"
//             >
//               <div
//                 class="relative h-48 bg-slate-900/50 flex items-center justify-center"
//               >
//                 <i class="fas fa-space-shuttle text-5xl text-slate-700"></i>
//                 <div class="absolute top-3 right-3">
//                   <span
//                     class="px-3 py-1 bg-green-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold"
//                   >
//                     Go
//                   </span>
//                 </div>
//               </div>
//               <div class="p-5">
//                 <div class="mb-3">
//                   <h4
//                     class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
//                   >
//                     Falcon 9 Block 5 | Starlink Group 6-44
//                   </h4>
//                   <p class="text-sm text-slate-400 flex items-center gap-2">
//                     <i class="fas fa-building text-xs"></i>
//                     SpaceX
//                   </p>
//                 </div>
//                 <div class="space-y-2 mb-4">
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-calendar text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Mar 15, 2024</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-clock text-slate-500 w-4"></i>
//                     <span class="text-slate-300">23:00 UTC</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-rocket text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Falcon 9</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
//                     <span class="text-slate-300 line-clamp-1">KSC, LC-39A</span>
//                   </div>
//                 </div>
//                 <div
//                   class="flex items-center gap-2 pt-4 border-t border-slate-700"
//                 >
//                   <button
//                     class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold"
//                   >
//                     Details
//                   </button>
//                   <button
//                     class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
//                   >
//                     <i class="far fa-heart"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <!-- STATIC LAUNCH CARD 2 -->
//             <div
//               class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer"
//             >
//               <div
//                 class="relative h-48 bg-slate-900/50 flex items-center justify-center"
//               >
//                 <i class="fas fa-rocket text-5xl text-slate-700"></i>
//                 <div class="absolute top-3 right-3">
//                   <span
//                     class="px-3 py-1 bg-yellow-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold"
//                   >
//                     TBC
//                   </span>
//                 </div>
//               </div>
//               <div class="p-5">
//                 <div class="mb-3">
//                   <h4
//                     class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
//                   >
//                     Electron | "Owl Night Long"
//                   </h4>
//                   <p class="text-sm text-slate-400 flex items-center gap-2">
//                     <i class="fas fa-building text-xs"></i>
//                     Rocket Lab
//                   </p>
//                 </div>
//                 <div class="space-y-2 mb-4">
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-calendar text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Mar 16, 2024</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-clock text-slate-500 w-4"></i>
//                     <span class="text-slate-300">09:15 UTC</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-rocket text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Electron</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
//                     <span class="text-slate-300 line-clamp-1"
//                       >Mahia Peninsula, NZ</span
//                     >
//                   </div>
//                 </div>
//                 <div
//                   class="flex items-center gap-2 pt-4 border-t border-slate-700"
//                 >
//                   <button
//                     class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold"
//                   >
//                     Details
//                   </button>
//                   <button
//                     class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
//                   >
//                     <i class="far fa-heart"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <!-- STATIC LAUNCH CARD 3 -->
//             <div
//               class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer"
//             >
//               <div
//                 class="relative h-48 bg-slate-900/50 flex items-center justify-center"
//               >
//                 <i class="fas fa-satellite-dish text-5xl text-slate-700"></i>
//                 <div class="absolute top-3 right-3">
//                   <span
//                     class="px-3 py-1 bg-blue-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold"
//                   >
//                     TBD
//                   </span>
//                 </div>
//               </div>
//               <div class="p-5">
//                 <div class="mb-3">
//                   <h4
//                     class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
//                   >
//                     Ariane 6 | Maiden Flight
//                   </h4>
//                   <p class="text-sm text-slate-400 flex items-center gap-2">
//                     <i class="fas fa-building text-xs"></i>
//                     Arianespace
//                   </p>
//                 </div>
//                 <div class="space-y-2 mb-4">
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-calendar text-slate-500 w-4"></i>
//                     <span class="text-slate-300">June 2024</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-clock text-slate-500 w-4"></i>
//                     <span class="text-slate-300">TBD</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-rocket text-slate-500 w-4"></i>
//                     <span class="text-slate-300">Ariane 62</span>
//                   </div>
//                   <div class="flex items-center gap-2 text-sm">
//                     <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
//                     <span class="text-slate-300 line-clamp-1"
//                       >Guiana Space Centre</span
//                     >
//                   </div>
//                 </div>
//                 <div
//                   class="flex items-center gap-2 pt-4 border-t border-slate-700"
//                 >
//                   <button
//                     class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold"
//                   >
//                     Details
//                   </button>
//                   <button
//                     class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
//                   >
//                     <i class="far fa-heart"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
         
     
//   `;

//   document.querySelector(".launches").innerHTML = cartonaa;
// }
// showSection(todaySection);
// getTodaySpace();


// ================= NAV BUTTONS =================
const todayBtn = document.querySelector(".today");
const launchesBtn = document.querySelector(".luncher");
const planetsBtn = document.querySelector(".planets");

// ================= SECTIONS =================
const todaySection = document.querySelector("#today");
const launchesSection = document.querySelector("#launches");
const planetsSection = document.querySelector("#planets");

// ================= CONTENT WRAPPERS =================
const todayContent = document.querySelector(".today-content");
const launchesContent = document.querySelector(".launches-content");
const planetsContent = document.querySelector(".planets-content");

// ================= LOAD FLAGS =================
let todayLoaded = false;
let launchesLoaded = false;
let planetsLoaded = false;

// ================= SHOW SECTION =================
function showSection(activeSection) {
  todaySection.classList.add("hidden");
  launchesSection.classList.add("hidden");
  planetsSection.classList.add("hidden");

  activeSection.classList.remove("hidden");
}

// ================= NAV EVENTS =================
todayBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(todaySection);

  if (!todayLoaded) {
    getTodaySpace();
    todayLoaded = true;
  }
});

launchesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(launchesSection);

  if (!launchesLoaded) {
    getLaunches();
    launchesLoaded = true;
  }
});

planetsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(planetsSection);

  if (!planetsLoaded) {
    getPlanets();
    planetsLoaded = true;
  }
});

// ================= DEFAULT LOAD =================
showSection(todaySection);
getTodaySpace();
todayLoaded = true;

// ================= TODAY IN SPACE =================
async function getTodaySpace() {
  try {
    const res = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=7schi7moHN1eewSUoBPKba0FtUal6KRvI9a1uowR"
    );
    const data = await res.json();
    renderToday(data);
  } catch (err) {
    console.error(err);
  }
}

function renderToday(data) {
  todayContent.innerHTML = `
    <div class="mb-6">
      <h2 class="text-2xl font-bold mb-1">Today in Space</h2>
      <p class="text-slate-400 text-sm">${data.date}</p>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div class="xl:col-span-2">
        <div class="rounded-2xl overflow-hidden h-[400px] bg-slate-800">
          ${
            data.media_type === "image"
              ? `<img src="${data.url}" class="w-full h-full object-cover" />`
              : `<iframe src="${data.url}" class="w-full h-full"></iframe>`
          }
        </div>
      </div>

      <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
        <h3 class="text-xl font-semibold mb-3">${data.title}</h3>
        <p class="text-slate-300 leading-relaxed">${data.explanation}</p>
      </div>
    </div>
  `;
}

// ================= LAUNCHES =================
async function getLaunches() {
  try {
    const res = await fetch(
      "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10"
    );
    const data = await res.json();
    renderLaunches(data.results);
  } catch (err) {
    console.error(err);
  }
}

function renderLaunches(data) {
  let cards = "";

  data.forEach((launch) => {
    cards += `
      <div class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all">
        <div class="h-48 bg-slate-900">
          <img
            src="${launch.image || "./assets/images/launch-placeholder.png"}"
            class="w-full h-full object-cover"
            onerror="this.src='./assets/images/launch-placeholder.png'"
          />
        </div>

        <div class="p-5">
          <h4 class="font-bold mb-2">${launch.name}</h4>
          <p class="text-sm text-slate-400">
            ${launch.launch_service_provider?.name || ""}
          </p>
          <p class="text-xs text-slate-400 mt-1">
            ${new Date(launch.net).toDateString()}
          </p>
        </div>
      </div>
    `;
  });

  launchesContent.innerHTML = `
    <div class="mb-6">
      <h2 class="text-3xl font-bold mb-2">Upcoming Launches</h2>
      <p class="text-slate-400">Real-time tracking of the next missions to space</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${cards}
    </div>
  `;
}

// ================= PLANETS =================
async function getPlanets() {
  try {
    const res = await fetch(
      "https://solar-system-opendata-proxy.vercel.app/api/planets"
    );
    const data = await res.json();
    renderPlanets(data.results);
  } catch (err) {
    console.error(err);
  }
}

function renderPlanets(data) {
  let planetsHTML = "";

  data.forEach((planet) => {
    planetsHTML += `
      <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
        <h4 class="font-bold">${planet.englishName}</h4>
        <p class="text-xs text-slate-400 mt-1">
          ${planet.isPlanet ? "Planet" : ""}
        </p>
      </div>
    `;
  });

  planetsContent.innerHTML = `
    <div class="mb-6">
      <h2 class="text-3xl font-bold">Planets</h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      ${planetsHTML}
    </div>
  `;
}
