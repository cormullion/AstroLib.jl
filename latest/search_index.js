var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#AstroLib.jl-1",
    "page": "Introduction",
    "title": "AstroLib.jl",
    "category": "section",
    "text": "AstroLib is a package of small generic routines useful above all in astronomical and astrophysical context, written in Julia.Included are also translations of some IDL Astronomy User’s Library procedures, which are released under terms of BSD-2-Clause License. AstroLib’s functions are not drop-in replacement of those procedures, Julia standard data types are often used (e.g., DateTime type instead of generic string for dates) and the syntax may slightly differ.An extensive error testing suite ensures old fixed bugs will not be brought back by future changes."
},

{
    "location": "index.html#Installation-1",
    "page": "Introduction",
    "title": "Installation",
    "category": "section",
    "text": "AstroLib is available for Julia 0.6 and later versions, and can be installed with Julia's built-in package manager. In a Julia session run the commandjulia> Pkg.update()\njulia> Pkg.add(\"AstroLib\")Older versions are also available for Julia 0.4 and 0.5.Note that, in order to work, a few functions require external files, which are automatically downloaded when building the package. Should these files be missing for some reason, you will be able to load the package but some functions may not work properly. You can manually build the package withjulia> Pkg.build(\"AstroLib\")"
},

{
    "location": "index.html#Usage-1",
    "page": "Introduction",
    "title": "Usage",
    "category": "section",
    "text": "After installing the package, you can start using AstroLib withusing AstroLibMany functions in AstroLib.jl are compatible with Measurements.jl package, which allows you to define quantities with uncertainty and propagate the error when performing calculations according to propagation of uncertainty rules. For example:julia> using AstroLib, Measurements\n\njulia> mag2flux(12.54 ± 0.03)\n3.499451670283562e-14 ± 9.669342299577655e-16"
},

{
    "location": "index.html#How-Can-I-Help?-1",
    "page": "Introduction",
    "title": "How Can I Help?",
    "category": "section",
    "text": "AstroLib.jl is developed on GitHub. You can contribute to the project in a number of ways: by translating more routines from IDL Astronomy User’s Library, or providing brand-new functions, or even improving existing ones (make them faster and more precise). Also bug reports are encouraged."
},

{
    "location": "index.html#License-1",
    "page": "Introduction",
    "title": "License",
    "category": "section",
    "text": "The AstroLib.jl package is licensed under the MIT “Expat” License. The original author is Mosè Giordano."
},

{
    "location": "index.html#Notes-1",
    "page": "Introduction",
    "title": "Notes",
    "category": "section",
    "text": "This project is a work-in-progress, only few procedures have been translated so far. In addition, function syntax may change from time to time. Check TODO.md out to see how you can help. Volunteers are welcome!"
},

{
    "location": "index.html#Documentation-1",
    "page": "Introduction",
    "title": "Documentation",
    "category": "section",
    "text": "Every function provided has detailed documentation that can be accessed at Julia REPL withjulia> ?FunctionNameor withjulia> @doc FunctionName"
},

{
    "location": "index.html#Related-Projects-1",
    "page": "Introduction",
    "title": "Related Projects",
    "category": "section",
    "text": "This is not the only effort to bundle astronomical functions written in Julia language. Other packages useful for more specific purposes are available at JuliaAstro. A list of other packages is available here.Because of this, some of IDL AstroLib’s utilities are not provided in AstroLib.jl as they are already present in other Julia packages. Here is a list of such utilities:aper, see AperturePhotometry.jl package\ncosmo_param, see Cosmology.jl package\ngalage, see Cosmology.jl package\nglactc_pm, see SkyCoords.jl package\nglactc, see SkyCoords.jl package\njplephinterp, see JPLEphemeris.jl package\njplephread, see JPLEphemeris.jl package\njplephtest, see JPLEphemeris.jl package\nlumdist, see Cosmology.jl package\nreadcol, use readdlm, part of Julia Base.DataFmt module. This is not a complete replacement for readcol but most of the time it does-the-right-thing even without using any option (it automatically identifies string and numerical columns) and you do not need to manually specify a variable for each columnIn addition, there are similar projects for Python (Python AstroLib) and R (Astronomy Users Library)."
},

{
    "location": "ref.html#",
    "page": "Reference",
    "title": "Reference",
    "category": "page",
    "text": ""
},

{
    "location": "ref.html#Reference-1",
    "page": "Reference",
    "title": "Reference",
    "category": "section",
    "text": ""
},

{
    "location": "ref.html#Data-types-1",
    "page": "Reference",
    "title": "Data types",
    "category": "section",
    "text": ""
},

{
    "location": "ref.html#Observatory-1",
    "page": "Reference",
    "title": "Observatory",
    "category": "section",
    "text": "AstroLib.jl defines a new Observatory type. This can be used to define a new object holding information about an observing site. It is a [composite type] whose fields arename (String type): the name of the site\nlatitude (Float64 type): North-ward latitude of the site in degrees\nlongitude (Float64 type): East-ward longitude of the site in degrees\naltitude (Float64 type): altitude of the site in meters\ntz (Float64 type): the number of hours of offset from UTCThe type constructor Observatory can be used to create a new Observatory object. Its syntax isObservatory(name, lat, long, alt, tz)name should be a string; lat, long, and tz should be anything that can be converted to a floating number with ten function; alt should be a real number.A predefined list of some observing sites is provided with AstroLib.observatories constant. It is a dictionary whose keys are the abbreviated names of the observatories. For example, you can access information of the European Southern Observatory withjulia> obs = AstroLib.observatories[\"eso\"]\nObservatory: European Southern Observatory\nlatitude:    -29.256666666666668°N\nlongitude:   -70.73°E\naltitude:    2347.0 m\ntime zone:   UTC-4\n\njulia> obs.longitude\n-70.73You can list all keys of the dictionary withkeys(AstroLib.observatories)Feel free to contribute new sites or adjust information of already present ones."
},

{
    "location": "ref.html#Planet-1",
    "page": "Reference",
    "title": "Planet",
    "category": "section",
    "text": "The package provides Planet type to hold information about Solar System planets. Its fields areDesignation:\nname: the name\nPhysical characteristics:\nradius: mean radius in meters\neqradius: equatorial radius in meters\npolradius: polar radius in meters\nmass: mass in kilogram\nOrbital characteristics (epoch J2000):\necc: eccentricity of the orbit\naxis: semi-major axis of the orbit in meters\nperiod: sidereal orbital period in secondsThe constructor has this syntax:Planet(name, radius, eqradius, polradius, mass, ecc, axis, period)The list of Solar System planets, from Mercury to Pluto, is available with AstroLib.planets dictionary. The keys of this dictionary are the lowercase names of the planets. For example:julia> AstroLib.planets[\"mercury\"]\nPlanet:            Mercury\nmean radius:       2.4397e6 m\nequatorial radius: 2.4397e6 m\npolar radius:      2.4397e6 m\nmass:              3.3011e23 kg\neccentricity:      0.20563069\nsemi-major axis:   5.790905e10 m\nperiod:            5.790905e10 s\n\njulia> AstroLib.planets[\"mars\"].eqradius\n3.3962e6\n\njulia> AstroLib.planets[\"saturn\"].mass\n5.6834e25"
},

{
    "location": "ref.html#Functions-organized-by-category-1",
    "page": "Reference",
    "title": "Functions organized by category",
    "category": "section",
    "text": ""
},

{
    "location": "ref.html#Coordinates-and-positions-1",
    "page": "Reference",
    "title": "Coordinates and positions",
    "category": "section",
    "text": "adstring(), aitoff(), altaz2hadec(), bprecess(), eci2geo(), eqpole(), euler(), gcirc(), geo2eci(). geo2geodetic(), geo2mag(), geodetic2geo(), hadec2altaz(), helio_rv(), jprecess(), mag2geo(), polrec(), posang(), precess(), precess_cd(), precess_xyz(), premat(), radec(), recpol() zenpos()"
},

{
    "location": "ref.html#Time-and-date-1",
    "page": "Reference",
    "title": "Time and date",
    "category": "section",
    "text": "ct2lst(), daycnv(), get_date(), get_juldate(), helio_jd(), jdcnv(), juldate(), month_cnv(), nutate(), ydn2md(), ymd2dn()"
},

{
    "location": "ref.html#Moon-and-sun-1",
    "page": "Reference",
    "title": "Moon and sun",
    "category": "section",
    "text": "moonpos(), mphase(), sunpos(), xyz()"
},

{
    "location": "ref.html#Utilities-1",
    "page": "Reference",
    "title": "Utilities",
    "category": "section",
    "text": "airtovac(), calz_unred(), cirrange(), deredd(), flux2mag(), gal_uvw(), imf(), ismeuv(), kepler_solver(), lsf_rotate(), mag2flux(), paczynski(), planck_freq(), planck_wave(), rad2sec(), rhotheta(), sec2rad(), sixty(), sphdist(), ten(), tic_one(), ticpos(), tics(), trueanom(), vactoair()"
},

{
    "location": "ref.html#Miscellaneous-(non-astronomy)-functions-1",
    "page": "Reference",
    "title": "Miscellaneous (non-astronomy) functions",
    "category": "section",
    "text": "ordinal()"
},

{
    "location": "ref.html#AstroLib.Observatory",
    "page": "Reference",
    "title": "AstroLib.Observatory",
    "category": "Type",
    "text": "Type holding information about an observing site.  Its fields are:\n\nname: the name of the site\nlatitude: North-ward latitude of the site in degrees\nlongitude: East-ward longitude of the site in degrees\naltitude: altitude of the site in meters\ntz: the number of hours of offset from UTC\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.Planet",
    "page": "Reference",
    "title": "AstroLib.Planet",
    "category": "Type",
    "text": "Type holding information about a planet.  Its fields are:\n\nDesignation:\n\nname: the name\n\nPhysical characteristics:\n\nradius: mean radius in meters\neqradius: equatorial radius in meters\npolradius: polar radius in meters\nmass: mass in kilogram\n\nOrbital characteristics (epoch J2000):\n\necc: eccentricity of the orbit\naxis: semi-major axis of the orbit in meters\nperiod: sidereal orbital period in seconds\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.adstring-Union{Tuple{T,T}, Tuple{T}} where T<:AbstractFloat",
    "page": "Reference",
    "title": "AstroLib.adstring",
    "category": "Method",
    "text": "adstring(ra::Real, dec::Real[, precision::Int=2, truncate::Bool=true]) -> string\nadstring([ra, dec]) -> string\nadstring(dec) -> string\nadstring([ra], [dec]) -> [\"string1\", \"string2\", ...]\n\nPurpose\n\nReturns right ascension and declination as string(s) in sexagesimal format.\n\nExplanation\n\nTakes right ascension and declination expressed in decimal format, converts them to sexagesimal and return a formatted string.  The precision of right ascension and declination can be specified.\n\nArguments\n\nArguments of this function are:\n\nra: right ascension in decimal degrees.  It is converted to hours before printing.\ndec: declination in decimal degrees.\n\nThe function can be called in different ways:\n\nTwo numeric arguments: first is ra, the second is dec.\nA 2-tuple (ra, dec).\nOne 2-element numeric array: [ra, dec].  A single string is returned.\nOne numeric argument: it is assumed only dec is provided.\nTwo numeric arrays of the same length: ra and dec arrays.  An array of strings is returned.\nAn array of 2-tuples (ra, dec).\n\nOptional keywords affecting the output format are always available:\n\nprecision (optional integer keyword): specifies the number of digits of declination seconds.  The number of digits for right ascension seconds is always assumed to be one more precision.  If the function is called with only dec as input, precision default to 1, in any other case defaults to 0.\ntruncate (optional boolean keyword): if true, then the last displayed digit in the output is truncated in precision rather than rounded.  This option is useful if adstring is used to form an official IAU name (see http://vizier.u-strasbg.fr/Dic/iau-spec.htx) with coordinate specification.\n\nOutput\n\nThe function returns one string if the function was called with scalar ra and dec (or only dec) or a 2-element array [ra, dec].  If instead it was feeded with arrays of ra and dec, an array of strings will be returned.  The format of strings can be specified with precision and truncate keywords, see above.\n\nExample\n\nadstring(30.4, -1.23, truncate=true)\n# => \" 02 01 35.9  -01 13 48\"\nadstring([30.4, -15.63], [-1.23, 48.41], precision=1)\n# => 2-element Array{AbstractString,1}:\n#     \" 02 01 36.00  -01 13 48.0\"\n#     \"-22 57 28.80  +48 24 36.0\"\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.airtovac-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.airtovac",
    "category": "Method",
    "text": "airtovac(wave_air) -> wave_vacuum\n\nPurpose\n\nConverts air wavelengths to vacuum wavelengths.\n\nExplanation\n\nWavelengths are corrected for the index of refraction of air under standard conditions.  Wavelength values below 2000  will not be altered.  Uses relation of Ciddor (1996).\n\nArguments\n\nwave_air: can be either a scalar or an array of numbers.  Wavelengths are\n\ncorrected for the index of refraction of air under standard conditions. Wavelength values below 2000  will not be altered, take care within 1  2000 .\n\nOutput\n\nVacuum wavelength in angstroms, same number of elements as wave_air.\n\nMethod\n\nUses relation of Ciddor (1996), Applied Optics 62, 958.\n\nExample\n\nIf the air wavelength is w = 6056.125 (a Krypton line), then airtovac(w) yields a vacuum wavelength of 6057.8019.\n\nNotes\n\nvactoair converts vacuum wavelengths to air wavelengths.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.aitoff-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.aitoff",
    "category": "Method",
    "text": "aitoff(l, b) -> x, y\n\nPurpose\n\nConvert longitude l and latitude b to (x, y) using an Aitoff projection.\n\nExplanation\n\nThis function can be used to create an all-sky map in Galactic coordinates with an equal-area Aitoff projection.  Output map coordinates are zero longitude centered.\n\nArguments\n\nl: longitude, scalar or vector, in degrees.\nb: latitude, number of elements as l, in degrees.\n\nCoordinates can be given also as a 2-tuple (l, b).\n\nOutput\n\n2-tuple (x, y).\n\nx: x coordinate, same number of elements as l.  x is normalized to be in -180 180.\ny: y coordinate, same number of elements as l.  y is normalized to be in -90 90.\n\nExample\n\nGet (x y) Aitoff coordinates of Sirius, whose Galactic coordinates are (22723 -8890).\n\nx, y = aitoff(227.23, -8.890)\n# => (-137.92196683723276,-11.772527357473054)\n\nNotes\n\nSee AIPS memo No. 46 (ftp://ftp.aoc.nrao.edu/pub/software/aips/TEXT/PUBL/AIPSMEMO46.PS), page 4, for details of the algorithm.  This version of aitoff assumes the projection is centered at b=0 degrees.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.altaz2hadec-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.altaz2hadec",
    "category": "Method",
    "text": "altaz2hadec(alt, az, lat) -> ha, dec\n\nPurpose\n\nConvert Horizon (Alt-Az) coordinates to Hour Angle and Declination.\n\nExplanation\n\nCan deal with the NCP singularity.  Intended mainly to be used by program hor2eq.\n\nArguments\n\nInput coordinates may be either a scalar or an array, of the same dimension.\n\nalt: local apparent altitude, in degrees, scalar or array.\naz: the local apparent azimuth, in degrees, scalar or vector, measured\n\neast of north!!!  If you have measured azimuth west-of-south (like the book  Meeus does), convert it to east of north via: az = (az + 180) % 360.\n\nlat: the local geodetic latitude, in degrees, scalar or array.\n\nalt and az can be given as a 2-tuple (alt, az).\n\nOutput\n\n2-tuple (ha, dec)\n\nha: the local apparent hour angle, in degrees.  The hour angle is the time that right ascension of 0 hours crosses the local meridian.  It is unambiguously defined.\ndec: the local apparent declination, in degrees.\n\nThe output coordinates are always floating points and have the same type (scalar or array) as the input coordinates.\n\nExample\n\nArcturus is observed at an apparent altitude of 59d,05m,10s and an azimuth (measured east of north) of 133d,18m,29s while at the latitude of +43.07833 degrees.  What are the local hour angle and declination of this object?\n\nha, dec = altaz2hadec(ten(59,05,10), ten(133,18,29), 43.07833)\n# => (336.6828582472844,19.182450965120402)\n\nThe widely available XEPHEM code gets:\n\nHour Angle = 336.683\nDeclination = 19.1824\n\nNotes\n\nhadec2altaz converts Hour Angle and Declination to Horizon (Alt-Az) coordinates.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.bprecess",
    "page": "Reference",
    "title": "AstroLib.bprecess",
    "category": "Function",
    "text": "bprecess(ra, dec[, epoch]) -> ra1950, dec1950\nbprecess(ra, dec, muradec[, parallax=parallax, radvel=radvel]) -> ra1950, dec1950\n\nPurpose\n\nPrecess positions from J2000.0 (FK5) to B1950.0 (FK4).\n\nExplanation\n\nCalculates the mean place of a star at B1950.0 on the FK4 system from the mean place at J2000.0 on the FK5 system.\n\nbprecess function has two methods, one for each of the following cases:\n\nthe proper motion is known and non-zero\nthe proper motion is unknown or known to be exactly zero (i.e. extragalactic radio sources).  Better precision can be achieved in this case by inputting the epoch of the original observations.\n\nArguments\n\nThe function has 2 methods.  The common mandatory arguments are:\n\nra: input J2000 right ascension, in degrees.\ndec: input J2000 declination, in degrees.\n\nThe two methods have a different third argument (see \"Explanation\" section for more details).  It can be one of the following:\n\nmuradec: 2-element vector containing the proper motion in seconds of arc per tropical century in right ascension and declination.\nepoch: scalar giving epoch of original observations.\n\nIf none of these two arguments is provided (so bprecess is fed only with right ascension and declination), it is assumed that proper motion is exactly zero and epoch = 2000.\n\nIf it is used the method involving muradec argument, the following keywords are available:\n\nparallax (optional numerical keyword): stellar parallax, in seconds of arc.\nradvel (optional numerical keyword): radial velocity in km/s.\n\nRight ascension and declination can be passed as the 2-tuple (ra, dec).  You can also pass ra, dec, parallax, and radvel as arrays, all of the same length N.  In that case, muradec should be a matrix 2×N.\n\nOutput\n\nThe 2-tuple of right ascension and declination in 1950, in degrees, of input coordinates is returned.  If ra and dec (and other possible optional arguments) are arrays, the 2-tuple of arrays (ra1950, dec1950) of the same length as the input coordinates is returned.\n\nMethod\n\nThe algorithm is taken from the Explanatory Supplement to the Astronomical Almanac 1992, page 186.  See also Aoki et al (1983), A&A, 128, 263.  URL: http://adsabs.harvard.edu/abs/1983A%26A...128..263A.\n\nExample\n\nThe SAO2000 catalogue gives the J2000 position and proper motion for the star HD\n\nFind the B1950 position.\n\nRA(2000) = 13h 42m 12.740s\nDec(2000) = 8d 23' 17.69''\nMu(RA) = -.0257 s/yr\nMu(Dec) = -.090 ''/yr\n\nmuradec = 100*[-15*0.0257, -0.090]; # convert to century proper motion\nra = ten(13, 42, 12.74)*15;\ndecl = ten(8, 23, 17.69);\nadstring(bprecess(ra, decl, muradec), precision=2)\n# => \" 13 39 44.526  +08 38 28.63\"\n\nNotes\n\n\"When transferring individual observations, as opposed to catalog mean place, the safest method is to transform the observations back to the epoch of the observation, on the FK4 system (or in the system that was used to to produce the observed mean place), convert to the FK5 system, and transform to the the epoch and equinox of J2000.0\" – from the Explanatory Supplement (1992), p. 180\n\njprecess performs the precession to J2000 coordinates.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.calz_unred",
    "page": "Reference",
    "title": "AstroLib.calz_unred",
    "category": "Function",
    "text": "calz_unred(wave, flux, ebv[, r_v]) -> deredden_wave\n\nPurpose\n\nDeredden a galaxy spectrum using the Calzetti et al. (2000) recipe.\n\nExplanation\n\nCalzetti et al.  (2000, ApJ 533, 682; http://adsabs.harvard.edu/abs/2000ApJ...533..682C) developed a recipe for dereddening the spectra of galaxies where massive stars dominate the radiation output, valid between 012 to 22 microns.  (calz_unred extrapolates between 012 and 00912 microns.)\n\nArguments\n\nwave: wavelength vector (Angstroms)\nflux: calibrated flux vector, same number of elements as wave.\nebv: color excess E(B-V), scalar.  If a negative ebv is supplied, then fluxes will be reddened rather than deredenned.  Note that the supplied color excess should be that derived for the stellar continuum, EBV(stars), which is related to the reddening derived from the gas, EBV(gas), via the Balmer decrement by EBV(stars) = 0.44*EBV(gas).\nr_v (optional): scalar ratio of total to selective extinction, default is 4.05.  Calzetti et al. (2000) estimate r_v = 405 pm 080 from optical-IR observations of 4 starbursts.\n\nOutput\n\nUnreddened flux vector, same units and number of elements as flux.  Flux values will be left unchanged outside valid domain (00912 - 22 microns).\n\nExample\n\nEstimate how a flat galaxy spectrum (in wavelength) between 1200  and 3200  is altered by a reddening of E(B-V) = 0.1.\n\nwave = collect(1200:50:3150);\nflux = ones(wave);\nflux_new = calz_unred.(wave, flux, -0.1);\n\nUsing a plotting tool you can visualize the unreddend flux.  For example, with PyPlot.jl\n\nusing PyPlot\nplot(wave, flux_new)\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.cirrange",
    "page": "Reference",
    "title": "AstroLib.cirrange",
    "category": "Function",
    "text": "cirrange(number[, max]) -> restricted_number\n\nPurpose\n\nForce a number into a given range 0 textmax).\n\nArgument\n\nnumber: the number to modify.  Can be a scalar or an array.\nmax (optional numerical argument): specify the extremum of the range 0 textmax)\n\ninto which the number should be restricted.  If omitted, defaults to 360.0.\n\nOutput\n\nThe converted number or array of numbers, as AbstractFloat.\n\nExample\n\nRestrict an array of numbers in the range 0 2pi) as if they are angles expressed in radians:\n\ncirrange([4pi, 10, -5.23], 2.0*pi)\n# => 3-element Array{Float64,1}:\n#     0.0\n#     3.71681\n#     1.05319\n\nNotes\n\nThis function does not support the radians keyword like IDL implementation. Use 2.0*pi as second argument to restrict a number to the same interval.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.ct2lst-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.ct2lst",
    "category": "Method",
    "text": "ct2lst(longitude, jd) -> local_sidereal_time\nct2lst(longitude, tz, date) -> local_sidereal_time\n\nPurpose\n\nConvert from Local Civil Time to Local Mean Sidereal Time.\n\nArguments\n\nThe function can be called in two different ways.  The only argument common to both methods is longitude:\n\nlongitude: the longitude in degrees (east of Greenwich) of the place for which the local sidereal time is desired, scalar.  The Greenwich mean sidereal time (GMST) can be found by setting longitude = 0.\n\nThe civil date to be converted to mean sidereal time can be specified either by providing the Julian days:\n\njd: this is number of Julian days for the date to be converted.  It can be a scalar or an array.\n\nor the time zone and the date:\n\ntz: the time zone of the site in hours, positive East of the Greenwich meridian (ahead of GMT).  Use this parameter to easily account for Daylight Savings time (e.g. -4=EDT, -5 = EST/CDT), scalar.\ndate: this is the local civil time with type DateTime.  It can\nbe a scalar or an array.\n\nOutput\n\nThe local sidereal time for the date/time specified in hours.  This is a scalar or an array of the same length as jd or date.\n\nMethod\n\nThe Julian days of the day and time is question is used to determine the number of days to have passed since 2000-01-01.  This is used in conjunction with the GST of that date to extrapolate to the current GST; this is then used to get the LST.  See Astronomical Algorithms by Jean Meeus, p. 84 (Eq. 11-4) for the constants used.\n\nExample\n\nFind the Greenwich mean sidereal time (GMST) on 2008-07-30 at 15:53 in Baltimore, Maryland (longitude=-76.72 degrees).  The timezone is EDT or tz=-4\n\nlst = ct2lst(-76.72, -4, DateTime(2008, 7, 30, 15, 53))\n# => 11.356505172312609\nsixty(lst)\n# => 3-element Array{Float64,1}:\n#     11.0    # Hours\n#     21.0    # Minutes\n#     23.4186 # Seconds\n\nFind the Greenwich mean sidereal time (GMST) on 2015-11-24 at 13:21 in Heidelberg, Germany (longitude=08° 43' E).  The timezone is CET or tz=1. Provide ct2lst only with the longitude of the place and the number of Julian days.\n\n# Convert longitude to decimals.\nlongitude=ten(8, 43);\n# Get number of Julian days.  Remember to subtract the time zone in\n# order to convert local time to UTC.\njd = jdcnv(DateTime(2015, 11, 24, 13, 21) - Dates.Hour(1));\n# Calculate Greenwich Mean Sidereal Time.\nlst = ct2lst(longitude, jd)\n# => 17.140685171005316\nsixty(lst)\n# => 3-element Array{Float64,1}:\n#     17.0    # Hours\n#     8.0    # Minutes\n#     26.4666 # Seconds\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.daycnv",
    "page": "Reference",
    "title": "AstroLib.daycnv",
    "category": "Function",
    "text": "daycnv(julian_days) -> DateTime\n\nPurpose\n\nConverts Julian days number to Gregorian calendar dates.\n\nExplanation\n\nTakes the number of Julian calendar days since epoch -4713-11-24T12:00:00 and returns the corresponding proleptic Gregorian Calendar date.\n\nArgument\n\njulian_days: Julian days number, scalar or array.\n\nOutput\n\nProleptic Gregorian Calendar date, of type DateTime, corresponding to the given Julian days number.\n\nExample\n\ndaycnv(2440000)\n# => 1968-05-23T12:00:00\n\nNotes\n\njdcnv is the inverse of this function.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.deredd-NTuple{5,Real}",
    "page": "Reference",
    "title": "AstroLib.deredd",
    "category": "Method",
    "text": "deredd(Eby, by, m1, c1, ub) -> by0, m0, c0, ub0\n\nPurpose\n\nDeredden stellar Stromgren parameters given for a value of E(b-y)\n\nArguments\n\nEby: color index E(b-y), scalar (E(b-y) = 0.73*E(B-V))\nby: b-y color (observed)\nm1: Stromgren line blanketing parameter (observed)\nc1: Stromgren Balmer discontinuity parameter (observed)\nub: u-b color (observed)\n\nAll arguments can be either scalars or arrays all of the same length.\n\nOutput\n\nThe 4-tuple (by0, m0, c0, ub0).\n\nby0: b-y color (dereddened)\nm0: line blanketing index (dereddened)\nc0: Balmer discontinuity parameter (dereddened)\nub0: u-b color (dereddened)\n\nThese are scalars or arrays of the same length as the input arguments.\n\nExample\n\nderedd(0.5, 0.2, 1.0, 1.0, 0.1)\n# => (-0.3,1.165,0.905,-0.665)\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.eci2geo-NTuple{4,Real}",
    "page": "Reference",
    "title": "AstroLib.eci2geo",
    "category": "Method",
    "text": "eci2geo(x, y, z, jd) -> latitude, longitude, altitude\n\nPurpose\n\nConvert Earth-centered inertial coordinates to geographic spherical coordinates.\n\nExplanation\n\nConverts from ECI (Earth-Centered Inertial) (x, y, z) rectangular coordinates to geographic spherical coordinates (latitude, longitude, altitude).  Julian day is also needed as input.\n\nECI coordinates are in km from Earth center at the supplied time (True of Date). Geographic coordinates assume the Earth is a perfect sphere, with radius equal to its equatorial radius.\n\nArguments\n\nx: ECI x coordinate at jd, in kilometers.\ny: ECI y coordinate at jd, in kilometers.\nz: ECI z coordinate at jd, in kilometers.\njd: Julian days.\n\nThe three coordinates can be passed as a 3-tuple (x, y, z).  In addition, x, y, z, and jd can be given as arrays of the same length.\n\nOutput\n\nThe 3-tuple of geographical coordinate (latitude, longitude, altitude).\n\nlatitude: latitude, in degrees.\nlongitude: longitude, in degrees.\naltitude: altitude, in kilometers.\n\nIf ECI coordinates are given as arrays, a 3-tuple of arrays of the same length is returned.\n\nExample\n\nObtain the geographic direction of the vernal point on 2015-06-30T14:03:12.857, in geographic coordinates, at altitude 600 km.  Note: equatorial radii of Solar System planets in meters are stored into AstroLib.planets dictionary.\n\nx = AstroLib.planets[\"earth\"].eqradius*1e-3 + 600;\nlat, long, alt = eci2geo(x, 0, 0, jdcnv(\"2015-06-30T14:03:12.857\"))\n# => (0.0,230.87301833205856,600.0)\n\nThese coordinates can be further transformed into geodetic coordinates using geo2geodetic or into geomagnetic coordinates using geo2mag.\n\nNotes\n\ngeo2eci converts geographic spherical coordinates to Earth-centered inertial coordinates.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.eqpole-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.eqpole",
    "category": "Method",
    "text": "eqpole(l, b) -> x, y\n\nPurpose\n\nConvert right ascension l and declination b to coordinate (x y) using an equal-area polar projection.\n\nExplanation\n\nThe output x and y coordinates are scaled to be in the range -90 90 and to go from equator to pole to equator.  Output map points can be centered on the north pole or south pole.\n\nArguments\n\nl: longitude, scalar or vector, in degrees\nb: latitude, same number of elements as right ascension, in degrees\nsouthpole (optional boolean keyword): keyword to indicate that the plot is to be centered on the south pole instead of the north pole.  Default is false.\n\nOutput\n\nThe 2-tuple (x y):\n\nx coordinate, same number of elements as right ascension, normalized to be in the range -90 90.\ny coordinate, same number of elements as declination, normalized to be in the range -90 90.\n\nExample\n\neqpole(100, 35, southpole=true)\n# => (-111.18287262822456,-19.604540237028665)\neqpole(80, 19)\n# => (72.78853915267848,12.83458333897169)\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.euler-Tuple{Real,Real,Integer}",
    "page": "Reference",
    "title": "AstroLib.euler",
    "category": "Method",
    "text": "euler(ai, bi, select[, FK4=true, radian=true])\n\nPurpose\n\nTransform between Galactic, celestial, and ecliptic coordinates.\n\nExplanation\n\nThe function is used by the astro procedure.\n\nArguments\n\nai: input longitude, scalar or vector.\nbi: input latitude, scalar or vector.\nselect : integer input specifying type of coordinate transformation. SELECT   From          To     | SELECT   From       To    1   RA-Dec (2000) Galactic |   4    Ecliptic   RA-Dec    2   Galactic      RA-DEC   |   5    Ecliptic   Galactic    3   RA-Dec        Ecliptic |   6    Galactic   Ecliptic\nFK4 (optional boolean keyword) : if this keyword is set to true, then input and output celestial and ecliptic coordinates should be given in equinox B1950. When false, by default, they should be given in equinox J2000.\nradian (optional boolean keyword) : if this keyword is set to true, all input and output angles are in radian rather than degrees.\n\nOutput\n\na 2-tuple (ao, bo):\n\nao: output longitude in degrees.\nbo: output latitude in degrees.\n\nExample\n\nFind the Galactic coordinates of Cyg X-1 (ra=299.590315, dec=35.201604)\n\njulia> euler(299.590315, 35.201604, 1)\n(71.33498957116959, 3.0668335310640984)\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.flux2mag",
    "page": "Reference",
    "title": "AstroLib.flux2mag",
    "category": "Function",
    "text": "flux2mag(flux[, zero_point, ABwave=number]) -> magnitude\n\nPurpose\n\nConvert from flux expressed in erg/(s cm² Å) to magnitudes.\n\nExplanation\n\nThis is the reverse of mag2flux.\n\nArguments\n\nflux: the flux to be converted in magnitude, expressed in erg/(s cm² Å).  It can be either a scalar or an array.\nzero_point: scalar giving the zero point level of the magnitude.  If not\n\nsupplied then defaults to 21.1 (Code et al 1976).  Ignored if the ABwave  keyword is supplied\n\nABwave (optional numeric keyword): wavelength scalar or vector in Angstroms.\n\nIf supplied, then returns Oke AB magnitudes (Oke & Gunn 1983, ApJ, 266, 713;  http://adsabs.harvard.edu/abs/1983ApJ...266..713O).\n\nOutput\n\nThe magnitude.  It is of the same type, scalar or array, as flux.\n\nIf the ABwave keyword is set then magnitude is given by the expression\n\ntextABmag = -25log_10(f) - 5log_10(textABwave) - 2406\n\nOtherwise, magnitude is given by the expression\n\ntextmag = -25log_10(textflux) - textzero point\n\nExample\n\nflux2mag(5.2e-15)\n# => 14.609991640913002\nflux2mag(5.2e-15, 15)\n# => 20.709991640913003\nflux2mag(5.2e-15, ABwave=15)\n# => 27.423535345634598\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.gal_uvw-NTuple{6,Real}",
    "page": "Reference",
    "title": "AstroLib.gal_uvw",
    "category": "Method",
    "text": "gal_uvw(ra, dec, pmra, pmdec, vrad, plx[, lsr=true]) -> u, v, w\n\nPurpose\n\nCalculate the Galactic space velocity (u v w) of a star.\n\nExplanation\n\nCalculates the Galactic space velocity (u v w) of a star given its (1) coordinates, (2) proper motion, (3) parallax, and (4) radial velocity.\n\nArguments\n\nUser must supply a position, proper motion, radial velocity and parallax. Either scalars or arrays all of the same length can be supplied.\n\n(1) Position:\n\nra: right ascension, in degrees\ndec: declination, in degrees\n\n(2) Proper Motion\n\npmra: proper motion in right ascension in arc units (typically milli-arcseconds/yr).  If given mu_alpha – proper motion in seconds of time/year – then this is equal to 15 mu_alpha cos(textdec).\npmdec: proper motion in declination (typically mas/yr).\n\n(3) Radial Velocity\n\nvrad: velocity in km/s\n\n(4) Parallax\n\nplx: parallax with same distance units as proper motion measurements typically milliarcseconds (mas)\n\nIf you know the distance in parsecs, then set plx to 1000textdistance, if proper motion measurements are given in milli-arcseconds/yr.\n\nThere is an additional optional keyword:\n\nlsr (optional boolean keyword): if this keyword is set to true, then the output velocities will be corrected for the solar motion (u v w)_odot = (-85 1338 649) (Coşkunoǧlu et al. 2011 MNRAS, 412, 1237; DOI:10.1111/j.1365-2966.2010.17983.x) to the local standard of rest (LSR).  Note that the value of the solar motion through the LSR remains poorly determined.\n\nOutput\n\nThe 3-tuple (u v w)\n\nu: velocity (km/s) positive toward the Galactic anticenter\nv: velocity (km/s) positive in the direction of Galactic rotation\nw: velocity (km/s) positive toward the North Galactic Pole\n\nMethod\n\nFollows the general outline of Johnson & Soderblom (1987, AJ, 93, 864; DOI:10.1086/114370) except that u is positive outward toward the Galactic anticenter, and the J2000 transformation matrix to Galactic coordinates is taken from the introduction to the Hipparcos catalog.\n\nExample\n\nCompute the U,V,W coordinates for the halo star HD 6755.  Use values from Hipparcos catalog, and correct to the LSR.\n\nra=ten(1,9,42.3)*15.; dec = ten(61,32,49.5);\npmra = 627.89;  pmdec = 77.84; # mas/yr\nvrad = -321.4; dis = 129; # distance in parsecs\nu, v, w = gal_uvw(ra, dec, pmra, pmdec, vrad, 1e3/dis, lsr=true)\n# => (118.2110474553902,-466.4828898385057,88.16573278565097)\n\nNotes\n\nThis function does not take distance as input.  See \"Arguments\" section above for how to provide it using parallax argument.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.gcirc-Tuple{Integer,Real,Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.gcirc",
    "category": "Method",
    "text": "gcirc(units, ra1, dec1, ra2, dec2) -> angular_distance\n\nPurpose\n\nComputes rigorous great circle arc distances.\n\nExplanation\n\nInput position can be either radians, sexagesimal right ascension and declination, or degrees.\n\nArguments\n\nunits: integer, can be either 0, or 1, or 2.  Describes units of inputs and\n\noutput:     * 0: everything (input right ascensions and declinations, and output       distance) is radians     * 1: right ascensions are in decimal hours, declinations in decimal degrees,       output distance in arc seconds     * 2: right ascensions and declinations are in degrees, output distance in arc       seconds\n\nra1:  right ascension or longitude of point 1\ndec1: declination or latitude of point 1\nra2: right ascension or longitude of point 2\ndec2: declination or latitude of point 2\n\nBoth ra1 and dec1, and ra2 and dec2 can be given as 2-tuples (ra1, dec1) and (ra2, dec2).\n\nOutput\n\nAngular distance on the sky between points 1 and 2, as a AbstractFloat.  See units argument above for the units.\n\nMethod\n\n\"Haversine formula\" see http://en.wikipedia.org/wiki/Great-circle_distance.\n\nExample\n\ngcirc(0, 120, -43, 175, +22)\n# => 1.590442261600714\n\nNotes\n\nIf ra1, dec1 are scalars, and ra2, dec2 are vectors, then the output\n\nis a vector giving the distance of each element of ra2, dec2 to ra1,  dec1.  Similarly, if ra1,de1 are vectors, and ra2,dec2 are scalars,  then the output is a vector giving the distance of each element of ra1,  dec1 to ra2, dec2.  If both ra1, dec1 and ra2, dec2 are vectors  then the output is a vector giving the distance of each element of ra1,  dec1 to the corresponding element of ra2, dec2.\n\nThe function sphdist provides an alternate method of computing a spherical\n\ndistance.\n\nThe Haversine formula can give rounding errors for antipodal points.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.geo2eci-NTuple{4,Real}",
    "page": "Reference",
    "title": "AstroLib.geo2eci",
    "category": "Method",
    "text": "geo2eci(latitude, longitude, altitude, jd) -> x, y, z\n\nPurpose\n\nConvert geographic spherical coordinates to Earth-centered inertial coordinates.\n\nExplanation\n\nConverts from geographic spherical coordinates (latitude, longitude, altitude) to ECI (Earth-Centered Inertial) (x, y, z) rectangular coordinates.  Julian days is also needed.\n\nGeographic coordinates assume the Earth is a perfect sphere, with radius equal to its equatorial radius.  ECI coordinates are in km from Earth center at epoch TOD (True of Date).\n\nArguments\n\nlatitude: geographic latitude, in degrees.\nlongitude: geographic longitude, in degrees.\naltitude: geographic altitude, in kilometers.\njd: Julian days.\n\nThe three coordinates can be passed as a 3-tuple (latitude, longitude, altitude).  In addition, latitude, longitude, altitude, and jd can be given as arrays of the same length.\n\nOutput\n\nThe 3-tuple of ECI (x, y, z) coordinates, in kilometers.  The TOD epoch is the supplied jd time.\n\nIf geographical coordinates are given as arrays, a 3-tuple of arrays of the same length is returned.\n\nExample\n\nObtain the ECI coordinates of the intersection of the equator and Greenwich's meridian on 2015-06-30T14:03:12.857\n\ngeo2eci(0, 0, 0, jdcnv(\"2015-06-30T14:03:12.857\"))\n# => (-4024.8671780315185,4947.835465127513,0.0)\n\nNotes\n\neci2geo converts Earth-centered inertial coordinates to geographic spherical coordinates.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.geo2geodetic-NTuple{5,Real}",
    "page": "Reference",
    "title": "AstroLib.geo2geodetic",
    "category": "Method",
    "text": "geo2geodetic(latitude, longitude, altitude) -> latitude, longitude, altitude\ngeo2geodetic(latitude, longitude, altitude, planet) -> latitude, longitude, altitude\ngeo2geodetic(latitude, longitude, altitude, equatorial_radius, polar_radius) -> latitude, longitude, altitude\n\nPurpose\n\nConvert from geographic (or planetographic) to geodetic coordinates.\n\nExplanation\n\nConverts from geographic (latitude, longitude, altitude) to geodetic (latitude, longitude, altitude).  In geographic coordinates, the Earth is assumed a perfect sphere with a radius equal to its equatorial radius.  The geodetic (or ellipsoidal) coordinate system takes into account the Earth's oblateness.\n\nGeographic and geodetic longitudes are identical.  Geodetic latitude is the angle between local zenith and the equatorial plane.  Geographic and geodetic altitudes are both the closest distance between the satellite and the ground.\n\nArguments\n\nThe function has two base methods.  The arguments common to all methods and always mandatory are latitude, longitude, and altitude:\n\nlatitude: geographic latitude, in degrees.\nlongitude: geographic longitude, in degrees.\naltitude: geographic altitude, in kilometers.\n\nIn order to convert to geodetic coordinates, you can either provide custom equatorial and polar radii of the planet or use the values of one of the planets of Solar System (Pluto included).\n\nIf you want to use the method with explicit equatorial and polar radii the additional mandatory arguments are:\n\nequatorial_radius: value of the equatorial radius of the body, in kilometers.\npolar_radius: value of the polar radius of the body, in kilometers.\n\nInstead, if you want to use the method with the selection of a planet, the only additional argument is the planet name:\n\nplanet (optional string argument): string with the name of the Solar System planet, from \"Mercury\" to \"Pluto\".  If omitted (so, when only latitude, longitude, and altitude are provided), the default is \"Earth\".\n\nIn all cases, the three coordinates can be passed as a 3-tuple (latitude, longitude, altitude).  In addition, geographical latitude, longitude, and altitude can be given as arrays of the same length.\n\nOutput\n\nThe 3-tuple (latitude, longitude, altitude) in geodetic coordinates, for the body with specified equatorial and polar radii (Earth by default).\n\nIf geographical coordinates are given as arrays, a 3-tuple of arrays of the same length is returned.\n\nMethod\n\nStephen P.  Keeler and Yves Nievergelt, \"Computing geodetic coordinates\", SIAM Rev. Vol. 40, No. 2, pp. 300-309, June 1998 (DOI:10.1137/S0036144597323921).\n\nPlanetary constants are from Planetary Fact Sheet (http://nssdc.gsfc.nasa.gov/planetary/factsheet/index.html).\n\nExample\n\nLocate the Earth geographic North pole (latitude: 90°, longitude: 0°, altitude 0 km), in geodetic coordinates:\n\ngeo2geodetic(90, 0, 0)\n# => (90.0,0.0,21.38499999999931)\n\nThe same for Jupiter:\n\ngeo2geodetic(90, 0, 0, \"Jupiter\")\n# => (90.0,0.0,4355.443799999994)\n\nFind geodetic coordinates for point of geographic coordinates (latitude, longitude, altitude) = (43.16°, -24.32°, 3.87 km) on a planet with equatorial radius 8724.32 km and polar radius 8619.19 km:\n\ngeo2geodetic(43.16, -24.32, 3.87, 8724.32, 8619.19)\n# => (43.849399515234516,-24.32,53.53354478670836)\n\nNotes\n\nWhereas the conversion from geodetic to geographic coordinates is given by an exact, analytical formula, the conversion from geographic to geodetic isn't. Approximative iterations (as used here) exist, but tend to become less good with increasing eccentricity and altitude.  The formula used in this routine should give correct results within six digits for all spatial locations, for an ellipsoid (planet) with an eccentricity similar to or less than Earth's.  More accurate results can be obtained via calculus, needing a non-determined amount of iterations.\n\nIn any case, the function geodetic2geo, which converts from geodetic (or planetodetic) to geographic coordinates, can be used to estimate the accuracy of geo2geodetic.\n\ncollect(geodetic2geo(geo2geodetic(67.2, 13.4, 1.2))) - [67.2, 13.4, 1.2]\n# => 3-element Array{Float64,1}:\n#     -3.56724e-9\n#      0.0\n#      9.47512e-10\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.geo2mag",
    "page": "Reference",
    "title": "AstroLib.geo2mag",
    "category": "Function",
    "text": "geo2mag(latitude, longitude[, year]) -> geomagnetic_latitude, geomagnetic_longitude\n\nPurpose\n\nConvert from geographic to geomagnetic coordinates.\n\nExplanation\n\nConverts from geographic (latitude, longitude) to geomagnetic (latitude, longitude).  Altitude is not involved in this function.\n\nArguments\n\nlatitude: geographic latitude (North), in degrees.\nlongitude: geographic longitude (East), in degrees.\nyear (optional numerical argument): the year in which to perform conversion. If omitted, defaults to current year.\n\nThe coordinates can be passed as arrays of the same length.\n\nOutput\n\nThe 2-tuple of magnetic (latitude, longitude) coordinates, in degrees.\n\nIf geographical coordinates are given as arrays, a 2-tuple of arrays of the same length is returned.\n\nExample\n\nKyoto has geographic coordinates 35° 00' 42'' N, 135° 46' 06'' E, find its geomagnetic coordinates in 2016:\n\ngeo2mag(ten(35,0,42), ten(135,46,6), 2016)\n# => (36.86579228937769,-60.184060536651614)\n\nNotes\n\nThis function uses list of North Magnetic Pole positions provided by World Magnetic Model (https://www.ngdc.noaa.gov/geomag/data/poles/NP.xy).\n\nmag2geo converts geomagnetical coordinates to geographic coordinates.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.geodetic2geo-NTuple{5,Real}",
    "page": "Reference",
    "title": "AstroLib.geodetic2geo",
    "category": "Method",
    "text": "geodetic2geo(latitude, longitude, altitude) -> latitude, longitude, altitude\ngeodetic2geo(latitude, longitude, altitude, planet) -> latitude, longitude, altitude\ngeodetic2geo(latitude, longitude, altitude, equatorial_radius, polar_radius) -> latitude, longitude, altitude\n\nPurpose\n\nConvert from geodetic (or planetodetic) to geographic coordinates.\n\nExplanation\n\nConverts from geodetic (latitude, longitude, altitude) to geographic (latitude, longitude, altitude).  In geographic coordinates, the Earth is assumed a perfect sphere with a radius equal to its equatorial radius.  The geodetic (or ellipsoidal) coordinate system takes into account the Earth's oblateness.\n\nGeographic and geodetic longitudes are identical.  Geodetic latitude is the angle between local zenith and the equatorial plane.  Geographic and geodetic altitudes are both the closest distance between the satellite and the ground.\n\nArguments\n\nThe function has two base methods.  The arguments common to all methods and always mandatory are latitude, longitude, and altitude:\n\nlatitude: geodetic latitude, in degrees.\nlongitude: geodetic longitude, in degrees.\naltitude: geodetic altitude, in kilometers.\n\nIn order to convert to geographic coordinates, you can either provide custom equatorial and polar radii of the planet or use the values of one of the planets of Solar System (Pluto included).\n\nIf you want to use the method with explicit equatorial and polar radii the additional mandatory arguments are:\n\nequatorial_radius: value of the equatorial radius of the body, in kilometers.\npolar_radius: value of the polar radius of the body, in kilometers.\n\nInstead, if you want to use the method with the selection of a planet, the only additional argument is the planet name:\n\nplanet (optional string argument): string with the name of the Solar System planet, from \"Mercury\" to \"Pluto\".  If omitted (so, when only latitude, longitude, and altitude are provided), the default is \"Earth\".\n\nIn all cases, the three coordinates can be passed as a 3-tuple (latitude, longitude, altitude).  In addition, geodetic latitude, longitude, and altitude can be given as arrays of the same length.\n\nOutput\n\nThe 3-tuple (latitude, longitude, altitude) in geographic coordinates, for the body with specified equatorial and polar radii (Earth by default).\n\nIf geodetic coordinates are given as arrays, a 3-tuple of arrays of the same length is returned.\n\nMethod\n\nStephen P.  Keeler and Yves Nievergelt, \"Computing geodetic coordinates\", SIAM Rev. Vol. 40, No. 2, pp. 300-309, June 1998 (DOI:10.1137/S0036144597323921).\n\nPlanetary constants from \"Allen's Astrophysical Quantities\", Fourth Ed., (2000).\n\nExample\n\nFind geographic coordinates of geodetic North pole (latitude: 90°, longitude: 0°, altitude 0 km) of the Earth:\n\ngeodetic2geo(90, 0, 0)\n# => (90.0,0.0,-21.38499999999931)\n\nThe same for Jupiter:\n\ngeodetic2geo(90, 0, 0, \"Jupiter\")\n# => (90.0,0.0,-4355.443799999994)\n\nFind geographic coordinates for point of geodetic coordinates (latitude, longitude, altitude) = (43.16°, -24.32°, 3.87 km) on a planet with equatorial radius 8724.32 km and polar radius 8619.19 km:\n\ngeodetic2geo(43.16, -24.32, 3.87, 8724.32, 8619.19)\n# => (42.46772711708433,-24.32,-44.52902080669082)\n\nNotes\n\ngeo2geodetic converts from geographic (or planetographic) to geodetic coordinates.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.get_date-Tuple{DateTime,Bool,Bool}",
    "page": "Reference",
    "title": "AstroLib.get_date",
    "category": "Method",
    "text": "get_date([date, old=true, timetag=true]) -> string\n\nPurpose\n\nReturns the UTC date in \"CCYY-MM-DD\" format for FITS headers.\n\nExplanation\n\nThis is the format required by the DATE and DATE-OBS keywords in a FITS header.\n\nArgument\n\ndate (optional): the date in UTC standard.  If omitted, defaults to the current UTC time.  It can be either a single date or an array of dates.  Each element can be either a DateTime type or anything that can be converted to that type.  In the case of vectorial input, each element is considered as a date, so you cannot provide a date by parts.\nold (optional boolean keyword): see below.\ntimetag (optional boolean keyword): see below.\n\nOutput\n\nA string with the date formatted according to the given optional keywords.\n\nWhen no optional keywords (timetag and old) are supplied, the format of the output string is \"CCYY-MM-DD\" (year-month-day part of the date), where CCYY represents a 4-digit calendar year, MM the 2-digit ordinal number of a calendar month within the calendar year, and DD the 2-digit ordinal number of a day within the calendar month.\nIf the boolean keyword old is true (default: false), the year-month-day part of date has \"DD/MM/YY\" format.  This is the formerly (pre-1997) recommended for FITS.  Note that this format is now deprecated because it uses only a 2-digit representation of the year.\nIf the boolean keyword timetag is true (default: false), \"Thh:mm:ss\" is appended to the year-month-day part of the date, where <hh> represents the hour in the day, <mm> the minutes, <ss> the seconds, and the literal 'T' the ISO 8601 time designator.\n\nNote that old and timetag keywords can be used together, so that the output string will have \"DD/MM/YYThh:mm:ss\" format.\n\nExample\n\nget_date(timetag=true)\n# => \"2016-03-14T11:26:23\"\n\nNotes\n\nA discussion of the DATExxx syntax in FITS headers can be found in\n\nhttp://www.cv.nrao.edu/fits/documents/standards/year2000.txt\n\nThose who wish to use need further flexibility in their date formats (e.g. to\n\nuse TAI time) should look at Bill Thompson's time routines in  http://sohowww.nascom.nasa.gov/solarsoft/gen/idl/time\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.get_juldate-Tuple{}",
    "page": "Reference",
    "title": "AstroLib.get_juldate",
    "category": "Method",
    "text": "get_juldate() -> julian_days\n\nPurpose\n\nReturn the number of Julian days for current time.\n\nExplanation\n\nReturn for current time the number of Julian calendar days since epoch -4713-11-24T12:00:00 as a floating point.\n\nExample\n\nget_juldate()\ndaycnv(get_juldate())\n\nNotes\n\nUse jdcnv to get the number of Julian days for a different date.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.hadec2altaz-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.hadec2altaz",
    "category": "Method",
    "text": "hadec2altaz(ha, dec, lat[, ws=true]) -> alt, az\n\nPurpose\n\nConvert Hour Angle and Declination to Horizon (Alt-Az) coordinates.\n\nExplanation\n\nCan deal with the NCP singularity.  Intended mainly to be used by program eq2hor.\n\nArguments\n\nInput coordinates may be either a scalar or an array, of the same dimension.\n\nha: the local apparent hour angle, in degrees.  The hour angle is the time that right ascension of 0 hours crosses the local meridian.  It is unambiguously defined.\ndec: the local apparent declination, in degrees.\nlat: the local geodetic latitude, in degrees, scalar or array.\nws (optional boolean keyword): if true, the output azimuth is measured West from South.  The default is to measure azimuth East from North.\n\nha and dec can be given as a 2-tuple (ha, dec).\n\nOutput\n\n2-tuple (alt, az)\n\nalt: local apparent altitude, in degrees.\naz: the local apparent azimuth, in degrees.\n\nThe output coordinates are always floating points and have the same type (scalar or array) as the input coordinates.\n\nExample\n\nArcturus is observed at an apparent hour angle of 336.6829 and a declination of 19.1825 while at the latitude of +43° 4' 42''.  What are the local altitude and azimuth of this object?\n\nalt, az = hadec2altaz(336.6829, 19.1825, ten(43, 4, 42))\n# => (59.08617155005683,133.3080693440254)\n\nNotes\n\naltaz2hadec converts Horizon (Alt-Az) coordinates to Hour Angle and Declination.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.helio_jd-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.helio_jd",
    "category": "Method",
    "text": "helio_jd(date, ra, dec[, B1950=true, diff=false]) -> jd_helio\nhelio_jd(date, ra, dec[, B1950=true, diff=true]) -> time_diff\n\nPurpose\n\nConvert geocentric (reduced) Julian date to heliocentric Julian date.\n\nExplanation\n\nThis procedure corrects for the extra light travel time between the Earth and the Sun.\n\nAn online calculator for this quantity is available at http://www.physics.sfasu.edu/astro/javascript/hjd.html\n\nUsers requiring more precise calculations and documentation should look at the IDL code available at http://astroutils.astronomy.ohio-state.edu/time/\n\nArguments\n\ndate: reduced Julian date (= JD - 2400000), it can be either a scalar or vector.  You can use juldate() to calculate the reduced Julian date.\nra and dec: scalars giving right ascension and declination in degrees. Default equinox is J2000.\nB1950 (optional boolean keyword): if set to true, then input coordinates are assumed to be in equinox B1950 coordinates.  Default is false.\ndiff (optional boolean keyword): if set to true, the function returns the time difference (heliocentric JD - geocentric JD) in seconds.  Default is false.\n\nOutput\n\nThe return value depends on the value of diff optional keywords:\n\nif diff is false (default), then the heliocentric reduced Julian date is returned.\nif diff is true, then the time difference in seconds between the geocentric and heliocentric Julian date is returned.\n\nExample\n\nWhat is the heliocentric Julian date of an observation of V402 Cygni (J2000: RA = 20 9 7.8, Dec = 37 09 07) taken on June 15, 2016 at 11:40 UT?\n\njd = juldate(2016, 6, 15, 11, 40);\nhelio_jd(jd, ten(20, 9, 7.8)*15, ten(37, 9, 7))\n# => 57554.98808289718\n\nNotes\n\nWayne Warren (Raytheon ITSS) has compared the results of this algorithm with the FORTRAN subroutines in the STARLINK SLALIB library (see http://star-www.rl.ac.uk/).\n\n                                                 Time Diff (sec)\n     Date               RA(2000)   Dec(2000)  STARLINK      IDL\n\n1999-10-29T00:00:00.0  21 08 25.  -67 22 00.  -59.0        -59.0\n1999-10-29T00:00:00.0  02 56 33.4 +00 26 55.  474.1        474.1\n1940-12-11T06:55:00.0  07 34 41.9 -00 30 42.  366.3        370.2\n1992-02-29T03:15:56.2  12 56 27.4 +42 10 17.  350.8        350.9\n2000-03-01T10:26:31.8  14 28 36.7 -20 42 11.  243.7        243.7\n2100-02-26T09:18:24.2  08 26 51.7 +85 47 28.  104.0        108.8\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.helio_rv",
    "page": "Reference",
    "title": "AstroLib.helio_rv",
    "category": "Function",
    "text": "helio_rv(jd, T, P, V_0, K[, e, ω]) -> rv\n\nPurpose\n\nReturn the heliocentric radial velocity of a spectroscopic binary.\n\nExplanation\n\nThis function will return the heliocentric radial velocity of a spectroscopic binary star at a given heliocentric date given its orbit.\n\nArguments\n\njd: time of observation, as number of Julian days.  It can be either a scalar or an array.\nT: time of periastron passage (max. +ve velocity for circular orbits), same time system as jd\nP: the orbital period in same units as jd\nV_0: systemic velocity\nK: velocity semi-amplitude in the same units as V_0\ne: eccentricity of the orbit.  It defaults to 0 if omitted\nω: longitude of periastron in degrees.  It defaults to 0 if omitted\n\nOutput\n\nThe predicted heliocentric radial velocity in the same units as Gamma for the date(s) specified by jd.  It is a scalar or an array depending on the type ofjd.\n\nExample\n\n(1) What was the heliocentric radial velocity of the primary component of HU Tau at 1730 UT 25 Oct 1994?\n\njd = juldate(94, 10, 25, 17, 30); # Obtain Geocentric Julian days\nhjd = helio_jd(jd, ten(04, 38, 16)*15, ten(20, 41, 05)); # Convert to HJD\nhelio_rv(hjd, 46487.5303, 2.0563056, -6, 59.3)\n# => -62.965570109145034\n\nNB: the functions juldate and helio_jd return a reduced HJD (HJD - 2400000) and so T and P must be specified in the same fashion.\n\n(2) Plot two cycles of an eccentric orbit, e=06, omega=45degree for both components of a binary star.  Use PyPlot.jl for plotting.\n\nusing PyPlot\nφ = linspace(0, 2, 1000); # Generate 1000 phase points\nplot(φ ,helio_rv(φ, 0, 1, 0, 100, 0.6, 45)) # Plot 1st component\nplot(φ ,helio_rv(φ, 0, 1, 0, 100, 0.6, 45+180)) # Plot 2nd component\n\nNotes\n\nThe user should ensure consistency with all time systems being used (i.e. jd and t should be in the same units and time system).  Generally, users should reduce large time values by subtracting a large constant offset, which may improve numerical accuracy.\n\nIf using the the function juldate and helio_jd, the reduced HJD time system must be used throughtout.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.imf-Tuple{AbstractArray{#s49,1} where #s49<:Real,AbstractArray{#s48,1} where #s48<:Real,AbstractArray{#s47,1} where #s47<:Real}",
    "page": "Reference",
    "title": "AstroLib.imf",
    "category": "Method",
    "text": "imf(mass, expon, mass_range) -> psi\n\nPurpose\n\nCompute an N-component power-law logarithmic initial mass function (IMF).\n\nExplanation\n\nThe function is normalized so that the total mass distribution equals one solar mass.\n\nArguments\n\nmass: mass in units of solar mass, vector.\nexpon: power law exponent, vector. The number of values in expon equals the number of different power-law components in the IMF.\nmass_range: vector containing the mass upper and lower limits of the IMF and masses where the IMF exponent changes. The number of values in mass_range should be one more than in expon. The values in mass_range should be monotonically increasing and positive.\n\nOutput\n\npsi: mass function, number of stars per unit logarithmic mass interval evaluated for supplied masses.\n\nExample\n\nShow the number of stars per unit mass interval at 3 Msun for a Salpeter (expon = -1.35) IMF, with a mass range from 0.1 MSun to 110 Msun.\n\njulia> imf([3], [-1.35], [0.1, 110]) / 3\n1-element Array{Float64,1}:\n 0.0129414\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.ismeuv",
    "page": "Reference",
    "title": "AstroLib.ismeuv",
    "category": "Function",
    "text": "ismeuv(wave, hcol[, he1col=hcol*0.1, he2col=0, fano=false]) -> tau\n\nPurpose\n\nCompute the continuum interstellar EUV optical depth\n\nExplanation\n\nThe EUV optical depth is computed from the photoionization of hydrogen and helium.\n\nArguments\n\nwave: scalar of wavelength value (in Angstroms). Useful range is 40 - 912 A; at shorter wavelength metal opacity should be considered, at longer wavelengths there is no photoionization.\nhcol: scalar specifying interstellar hydrogen column density in cm-2.\nhe1col (optional): scalar specifying neutral helium column density in cm-2. Default is 0.1*hcol (10% of hydrogen column)\nhe2col (optional): scalar specifying ionized helium column density in cm-2 Default is 0.\nfano (optional boolean keyword): If this keyword is true, then the 4 strongest auto-ionizing resonances of He I are included. The shape of these resonances is given by a Fano profile - see Rumph, Bowyer, & Vennes 1994, AJ, 107, 2108. If these resonances are included then the input wavelength vector should have a fine (>~0.01 A) grid between 190 A and 210 A, since the resonances are very narrow.\n\nOutput\n\ntau: Vector giving resulting optical depth, same number of elements as wave, non-negative values.\n\nExample\n\nOne has a model EUV spectrum with wavelength, w (in Angstroms).\nFind the EUV optical depth by 1e18 cm-2 of HI, with N(HeI)/N(HI) = N(HeII)/N(HI) = 0.05.\n\njulia> ismeuv.([670, 910], 1e19, 5e17, 5e17)\n2-element Array{Float64,1}:\n 27.3539\n 62.6838\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.jdcnv",
    "page": "Reference",
    "title": "AstroLib.jdcnv",
    "category": "Function",
    "text": "jdcnv(date) -> julian_days\n\nPurpose\n\nConvert proleptic Gregorian Calendar date in UTC standard to number of Julian days.\n\nExplanation\n\nTakes the given proleptic Gregorian date in UTC standard and returns the number of Julian calendar days since epoch -4713-11-24T12:00:00.\n\nArgument\n\ndate: date in proleptic Gregorian Calendar.  Can be either a single date or an array of dates.  Each element can be either a DateTime type or anything that can be converted directly to DateTime.  In the case of vectorial input, each element is considered as a date, so you cannot provide a date by parts.\n\nOutput\n\nNumber of Julian days, as a floating point.\n\nExample\n\nFind the Julian days number at 2016 August 23, 03:39:06.\n\njdcnv(DateTime(2016, 08, 23, 03, 39, 06))\n# => 2.4576236521527776e6\njdcnv(2016, 08, 23, 03, 39, 06)\n# => 2.4576236521527776e6\njdcnv(\"2016-08-23T03:39:06\")\n# => 2.4576236521527776e6\n\nNotes\n\nThis is the inverse of daycnv.\n\nget_juldate returns the number of Julian days for current time.  It is equivalent to jdcnv(now(Dates.UTC)).\n\nFor the conversion of Julian date to number of Julian days, use juldate.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.jprecess",
    "page": "Reference",
    "title": "AstroLib.jprecess",
    "category": "Function",
    "text": "jprecess(ra, dec[, epoch]) -> ra2000, dec2000\njprecess(ra, dec, muradec[, parallax=parallax, radvel=radvel]) -> ra2000, dec2000\n\nPurpose\n\nPrecess positions from B1950.0 (FK4) to J2000.0 (FK5).\n\nExplanation\n\nCalculate the mean place of a star at J2000.0 on the FK5 system from the mean place at B1950.0 on the FK4 system.\n\njprecess function has two methods, one for each of the following cases:\n\nthe proper motion is known and non-zero\nthe proper motion is unknown or known to be exactly zero (i.e. extragalactic radio sources).  Better precision can be achieved in this case by inputting the epoch of the original observations.\n\nArguments\n\nThe function has 2 methods.  The common mandatory arguments are:\n\nra: input B1950 right ascension, in degrees.\ndec: input B1950 declination, in degrees.\n\nThe two methods have a different third argument (see \"Explanation\" section for more details).  It can be one of the following:\n\nmuradec: 2-element vector containing the proper motion in seconds of arc per tropical century in right ascension and declination.\nepoch: scalar giving epoch of original observations.\n\nIf none of these two arguments is provided (so jprecess is fed only with right ascension and declination), it is assumed that proper motion is exactly zero and epoch = 1950.\n\nIf it is used the method involving muradec argument, the following keywords are available:\n\nparallax (optional numerical keyword): stellar parallax, in seconds of arc.\nradvel (optional numerical keyword): radial velocity in km/s.\n\nRight ascension and declination can be passed as the 2-tuple (ra, dec).  You can also pass ra, dec, parallax, and radvel as arrays, all of the same length N.  In that case, muradec should be a matrix 2×N.\n\nOutput\n\nThe 2-tuple of right ascension and declination in 2000, in degrees, of input coordinates is returned.  If ra and dec (and other possible optional arguments) are arrays, the 2-tuple of arrays (ra2000, dec2000) of the same length as the input coordinates is returned.\n\nMethod\n\nThe algorithm is taken from the Explanatory Supplement to the Astronomical Almanac 1992, page 184.  See also Aoki et al (1983), A&A, 128, 263.  URL: http://adsabs.harvard.edu/abs/1983A%26A...128..263A.\n\nExample\n\nThe SAO catalogue gives the B1950 position and proper motion for the  star HD 119288.   Find the J2000 position. \n\nRA(1950) = 13h 39m 44.526s\nDec(1950) = 8d 38' 28.63''\nMu(RA) = -.0259 s/yr\nMu(Dec) = -.093 ''/yr\n\nmuradec = 100*[-15*0.0259, -0.093]; # convert to century proper motion\nra = ten(13, 39, 44.526)*15;\ndecl = ten(8, 38, 28.63);\nadstring(jprecess(ra, decl, muradec), precision=2)\n# => \" 13 42 12.740  +08 23 17.69\"\n\nNotes\n\n\"When transferring individual observations, as opposed to catalog mean place, the safest method is to tranform the observations back to the epoch of the observation, on the FK4 system (or in the system that was used to to produce the observed mean place), convert to the FK5 system, and transform to the the epoch and equinox of J2000.0\" – from the Explanatory Supplement (1992), p. 180\n\nbprecess performs the precession to B1950 coordinates.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.juldate-Tuple{DateTime}",
    "page": "Reference",
    "title": "AstroLib.juldate",
    "category": "Method",
    "text": "juldate(date::DateTime) -> reduced_julia_days\n\nPurpose\n\nConvert from calendar to Reduced Julian Days.\n\nExplanation\n\nJulian Day Number is a count of days elapsed since Greenwich mean noon on 1 January 4713 B.C.  Julian Days are the number of Julian days followed by the fraction of the day elapsed since the preceding noon.\n\nThis function takes the given date and returns the number of Julian calendar days since epoch 1858-11-16T12:00:00 (Reduced Julian Days = Julian Days - 2400000).\n\nArgument\n\ndate: date in Julian Calendar, UTC standard.  It can be either e single date or an array of dates.  Each element can be given in DateTime type or anything that can be converted to that type.  In the case of vectorial input, each element is considered as a date, so you cannot provide a date by parts.\n\nOutput\n\nThe number of Reduced Julian Days is returned.  If date is an array, an array of the same length as date is returned.\n\nExample\n\nGet number of Reduced Julian Days at 2016-03-20T15:24:00.\n\njuldate(DateTime(2016, 03, 20, 15, 24))\n# => 57468.14166666667\njuldate(2016, 03, 20, 15, 24)\n# => 57468.14166666667\njuldate(\"2016-03-20T15:24\")\n# => 57468.14166666667\n\nNotes\n\nJulian Calendar is assumed, thus before 1582-10-15T00:00:00 this function is not the inverse of daycnv.  For the conversion proleptic Gregorian date to number of Julian days, use jdcnv, which is the inverse of daycnv.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.kepler_solver-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.kepler_solver",
    "category": "Method",
    "text": "kepler_solver(M, e) -> E\n\nPurpose\n\nSolve Kepler's equation in the elliptic motion regime (0 leq e leq 1) and return eccentric anomaly E.\n\nExplanation\n\nIn order to find the position of a body in elliptic motion (e.g., in the two-body problem) at a given time t, one has to solve the Kepler's equation\n\nM(t) = E(t) - esin E(t)\n\nwhere M(t) = (t - t_0)P is the mean anomaly, E(t) the eccentric anomaly, e the eccentricity of the orbit, t_0 is the time of periapsis passage, and P is the period of the orbit.  Usually the eccentricity is given and one wants to find the eccentric anomaly E(t) at a specific time t, so that also the mean anomaly M(t) is known.\n\nArguments\n\nM: mean anomaly.  This can be either a scalar or an array\ne: eccentricity, in the elliptic motion regime (0 leq e leq 1)\n\nOutput\n\nThe eccentric anomaly E, restricted to the range -pi pi.  If an array of mean anomalies is provided in input, an array of the same length as M is returned.\n\nMethod\n\nMany different numerical methods exist to solve Kepler's equation.  This function implements the algorithm proposed in Markley (1995) Celestial Mechanics and Dynamical Astronomy, 63, 101 (DOI:10.1007/BF00691917).  This method is not iterative, requires only four transcendental function evaluations, and has been proved to be fast and efficient over the entire range of elliptic motion 0 leq e leq 1.\n\nExample\n\n(1) Find the eccentric anomaly for an orbit with eccentricity e = 07 and for M(t) = 8pi3.\n\necc = 0.7;\nE = kepler_solver(8pi/3, ecc)\n# => 2.5085279492864223\n\n(2) Plot the eccentric anomaly as a function of mean anomaly for eccentricity e = 0, 05, 09.  Recall that kepler_solver gives E in -pi pi, use cirrange to have it in 0 2pi.  Use PyPlot.jl for plotting.\n\nusing PyPlot\nM=linspace(0, 2pi, 1001)[1:end-1];\nfor ecc in (0, 0.5, 0.9); plot(M, cirrange(kepler_solver(M, ecc), 2pi)); end\n\nNotes\n\nThe true anomaly can be calculated with trueanom function.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.lsf_rotate",
    "page": "Reference",
    "title": "AstroLib.lsf_rotate",
    "category": "Function",
    "text": "lsf_rotate(delta_v, v_sin_i[, epsilon = 0.3]) -> velocity_grid, lsf\n\nPurpose\n\nCreate a 1-d convolution kernel to broaden a spectrum from a rotating star.\n\nExplanation\n\nCan be used to derive the broadening effect (LSF, line spread function) due to rotation on a synthetic stellar spectrum.  Assumes constant limb darkening across the disk.\n\nArguments\n\ndelta_v: numeric scalar giving the step increment (in km/s) in the output rotation kernel\nv_sin_i: the rotational velocity projected along the line of sight (km/s)\nepsilon (optional numeric argument): numeric scalar giving the limb-darkening coefficient, default = 0.6 which is typical for photospheric lines.  The specific intensity I at any angle theta from the specific intensity I_textcen at the center of the disk is given by:\nI = I_textcencdot(1 - varepsiloncdot(1 - cos(theta)))\n\nOutput\n\nThe 2-tuple (velocity_grid, lsf):\n\nvelocity_grid: vector of velocity grid with the same number of elements as lsf (see below)\nlsf: the convolution kernel vector for the specified rotational velocity. The number of points in lsf will be always be odd (the kernel is symmetric) and equal to either ceil(2*v_sin_i/delta_v) or ceil(2*v_sin_i/delta_v) + 1, whichever number is odd.  Elements of lsf will always be of type AbstractFloat.  To actually compute the broadening, the spectrum should be convolved with the rotational lsf\n\nExample\n\nPlot the line spread function for a star rotating at 90 km/s in velocity space every 3 km/s.  Use PyPlot.jl for plotting.\n\nusing PyPlot\nplot(lsf_rotate(3, 90)...)\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.mag2flux",
    "page": "Reference",
    "title": "AstroLib.mag2flux",
    "category": "Function",
    "text": "mag2flux(mag[, zero_point, ABwave=number]) -> flux\n\nPurpose\n\nConvert from magnitudes to flux expressed in erg/(s cm² Å).\n\nExplanation\n\nThis is the reverse of flux2mag.\n\nArguments\n\nmag: the magnitude to be converted in flux.  It can be either a scalar or an array.\nzero_point: scalar giving the zero point level of the magnitude.  If not\n\nsupplied then defaults to 21.1 (Code et al 1976).  Ignored if the ABwave  keyword is supplied\n\nABwave (optional numeric keyword): wavelength, scalar or array, in\n\nAngstroms.  If supplied, then the input mag is assumed to contain Oke AB  magnitudes (Oke & Gunn 1983, ApJ, 266, 713;  http://adsabs.harvard.edu/abs/1983ApJ...266..713O).\n\nOutput\n\nThe flux.  It is of the same type, scalar or array, as mag.\n\nIf the ABwave keyword is set, then the flux is given by the expression\n\ntextflux = 10^-04(textmag +2406 + 4log_10(textABwave))\n\nOtherwise the flux is given by\n\ntextflux =  10^-04(textmag + textzero point)\n\nExample\n\nmag2flux(8.3)\n# => 1.7378008287493692e-12\nmag2flux(8.3, 12)\n# => 7.58577575029182e-9\nmag2flux(8.3, ABwave=12)\n# => 3.6244115683017193e-7\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.mag2geo",
    "page": "Reference",
    "title": "AstroLib.mag2geo",
    "category": "Function",
    "text": "mag2geo(latitude, longitude[, year]) -> geographic_latitude, geographic_longitude\n\nPurpose\n\nConvert from geomagnetic to geographic coordinates.\n\nExplanation\n\nConverts from geomagnetic (latitude, longitude) to geographic (latitude, longitude).  Altitude is not involved in this function.\n\nArguments\n\nlatitude: geomagnetic latitude (North), in degrees.\nlongitude: geomagnetic longitude (East), in degrees.\nyear (optional numerical argument): the year in which to perform conversion. If omitted, defaults to current year.\n\nThe coordinates can be passed as arrays of the same length.\n\nOutput\n\nThe 2-tuple of geographic (latitude, longitude) coordinates, in degrees.\n\nIf geomagnetic coordinates are given as arrays, a 2-tuple of arrays of the same length is returned.\n\nExample\n\nFind position of North Magnetic Pole in 2016\n\nmag2geo(90, 0, 2016)\n# => (86.395,-166.29000000000002)\n\nNotes\n\nThis function uses list of North Magnetic Pole positions provided by World Magnetic Model (https://www.ngdc.noaa.gov/geomag/data/poles/NP.xy).\n\ngeo2mag converts geographic coordinates to geomagnetic coordinates.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.month_cnv-Tuple{Integer}",
    "page": "Reference",
    "title": "AstroLib.month_cnv",
    "category": "Method",
    "text": "month_cnv(number[, shor=true, up=true, low=true]) -> month_name\nmonth_cnv(name) -> number\n\nPurpose\n\nConvert between a month English name and  the equivalent number.\n\nExplanation\n\nFor example, converts from \"January\" to 1  or vice-versa.\n\nArguments\n\nThe functions has two methods, one with numeric input (and three possible boolean keywords) and the other one with string input.\n\nNumeric input arguments:\n\nnumber: the number of the month to be converted to month name.\nshort (optional boolean keyword): if true, the abbreviated (3-character) name of the month will be returned, e.g. \"Apr\" or \"Oct\".  Default is false.\nup (optional boolean keyword): if true, the name of the month will be all in upper case, e.g. \"APRIL\" or \"OCTOBER\".  Default is false.\nlow (optional boolean keyword): if true, the name of the month will be all in lower case, e.g. \"april\" or \"october\".  Default is false.\n\nString input argument:\n\nname: month name to be converted to month number.\n\nAll mandatory arguments can be provided either as a single element or as an array.\n\nOutput\n\nThe month name or month number, depending on the input.  For numeric input, the format of the month name is influenced by the optional keywords.\n\nExample\n\njulia> month_cnv.([\"janua\", \"SEP\", \"aUgUsT\"])\n3-element Array{Int64,1}:\n 1\n 9\n 8\n\njulia> month_cnv.([2, 12, 6], short=true, low=true)\n3-element Array{String,1}:\n \"feb\"\n \"dec\"\n \"jun\"\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.moonpos-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.moonpos",
    "category": "Method",
    "text": "moonpos(jd[, radians=true]) -> ra, dec, dis, geolong, geolat\n\nPurpose\n\nCompute the right ascension and declination of the Moon at specified Julian date.\n\nArguments\n\njd: the Julian ephemeris date.  It can be either a scalar or an array\nradians (optional boolean keyword): if set to true, then all output angular quantities are given in radians rather than degrees.  The default is false\n\nOutput\n\nThe 5-tuple (ra, dec, dis, geolong, geolat):\n\nra: apparent right ascension of the Moon in degrees, referred to the true equator of the specified date(s)\ndec: the declination of the Moon in degrees\ndis: the distance between the centre of the Earth and the centre of the Moon in kilometers\ngeolong: apparent longitude of the moon in degrees, referred to the ecliptic of the specified date(s)\ngeolat: apparent longitude of the moon in degrees, referred to the ecliptic of the specified date(s)\n\nIf jd is an array, then all output quantities are arrays of the same length as jd.\n\nMethod\n\nDerived from the Chapront ELP2000/82 Lunar Theory (Chapront-Touze' and Chapront, 1983, 124, 50), as described by Jean Meeus in Chapter 47 of ``Astronomical Algorithms'' (Willmann-Bell, Richmond), 2nd edition, 1998.  Meeus quotes an approximate accuracy of 10\" in longitude and 4\" in latitude, but he does not give the time range for this accuracy.\n\nComparison of the IDL procedure with the example in ``Astronomical Algorithms'' reveals a very small discrepancy (~1 km) in the distance computation, but no difference in the position calculation.\n\nExample\n\n(1) Find the position of the moon on April 12, 1992\n\njd = jdcnv(1992, 4, 12);\nadstring(moonpos(jd)[1:2],precision=1)\n# => \" 08 58 45.23  +13 46 06.1\"\n\nThis is within 1\" from the position given in the Astronomical Almanac.\n\n(2) Plot the Earth-moon distance during 2016 with sampling of 6 hours.  Use PyPlot.jl for plotting\n\nusing PyPlot\npoints = DateTime(2016):Dates.Hour(6):DateTime(2017);\nplot(points, moonpos(jdcnv(points))[3])\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.mphase-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.mphase",
    "category": "Method",
    "text": "mphase(jd) -> k\n\nPurpose\n\nReturn the illuminated fraction of the Moon at given Julian date(s).\n\nArguments\n\njd: the Julian ephemeris date.  It can be either a scalar or an array.\n\nOutput\n\nThe illuminated fraction k of Moon's disk, with 0 leq k leq 1. k = 0 indicates a new moon, while k = 1 stands for a full moon.  If jd is given as an array, an array of the same number of elements as jd is returned.\n\nMethod\n\nAlgorithm from Chapter 46 of \"Astronomical Algorithms\" by Jean Meeus (Willmann-Bell, Richmond) 1991.  sunpos and moonpos are used to get positions of the Sun and the Moon, and the Moon distance.  The selenocentric elongation of the Earth from the Sun (phase angle) is then computed, and used to determine the illuminated fraction.\n\nExample\n\nPlot the illuminated fraction of the Moon for every day in January 2018 with a hourly sampling.  Use PyPlot.jl for plotting\n\nusing PyPlot\npoints = DateTime(2018,01,01):Dates.Hour(1):DateTime(2018,01,31,23,59,59);\nplot(points, mphase(jdcnv(points)))\n\nNote that in this calendar month there are two full moons, this event is called blue moon.\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.nutate-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.nutate",
    "category": "Method",
    "text": "nutate(jd) -> long, obliq\n\nPurpose\n\nReturn the nutation in longitude and obliquity for a given Julian date.\n\nArguments\n\njd: Julian ephemeris date, it can be either a scalar or a vector\n\nOutput\n\nThe 2-tuple (long, obliq), where\n\nlong: the nutation in longitude\nobl: the nutation in latitude\n\nIf jd is an array, long and obl are arrays of the same length.\n\nMethod\n\nUses the formula in Chapter 22 of ``Astronomical Algorithms'' by Jean Meeus (1998, 2nd ed.) which is based on the 1980 IAU Theory of Nutation and includes all terms larger than 0.0003\".\n\nExample\n\n(1) Find the nutation in longitude and obliquity 1987 on Apr 10 at Oh.  This is example 22.a from Meeus\n\njd = jdcnv(1987, 4, 10);\nnutate(jd)\n# => (-3.787931077110755,9.442520698644401)\n\n(2) Plot the daily nutation in longitude and obliquity during the 21st century. Use PyPlot.jl for plotting.\n\nusing PyPlot\nyears = DateTime(2000):DateTime(2100);\nlong, obl = nutate(jdcnv(years));\nplot(years, long); plot(years, obl)\n\nYou can see both the dominant large scale period of nutation, of 18.6 years, and smaller oscillations with shorter periods.\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.ordinal-Tuple{Integer}",
    "page": "Reference",
    "title": "AstroLib.ordinal",
    "category": "Method",
    "text": "ordinal(num) -> result\n\nPurpose\n\nConvert an integer to a correct English ordinal string.\n\nExplanation\n\nThe first four ordinal strings are \"1st\", \"2nd\", \"3rd\", \"4th\" ....\n\nArguments\n\nnum: number to be made ordinal. It should be of type int.\n\nOutput\n\nresult: ordinal string, such as '1st' '3rd '164th' '87th' etc\n\nExample\n\njulia> ordinal.(1:5)\n5-element Array{String,1}:\n \"1st\"\n \"2nd\"\n \"3rd\"\n \"4th\"\n \"5th\"\n\nNotes\n\nThis function does not support float arguments, unlike the IDL implementation. Code of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.paczynski-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.paczynski",
    "category": "Method",
    "text": "paczynski(u) -> amplification\n\nPurpose\n\nCalculate gravitational microlensing amplification of a point-like source by a single point-like lens.\n\nExplanation\n\nReturn the gravitational microlensing amplification of a point-like source by a single point-like lens, using Paczyński formula\n\nA(u) = fracu^2 + 2usqrtu^2 + 4\n\nwhere u is the projected distance between the lens and the source in units of Einstein radii.\n\nIn order to speed up calculations for extreme values of u, the following asyntotic expressions for A(u) are used:\n\nA(u) =\nbegincases\n 1u  u ll 1 \n textsgn(u)  u gg 1\nendcases\n\nArguments\n\nu: projected distance between the lens and the source, in units of Einstein radii\n\nThe distance can be either a scalar or an array.\n\nOutput\n\nThe microlensing amplification for the given distance.  If u is passed as an array, an array of the same length is returned.\n\nExample\n\nCalculate the microlensing amplification for u = 10^-10, 10^-1, 1, 10, 10^10:\n\npaczynski([1e-10, 1e-1, 1, 10, 1e10])\n# => 5-element Array{Float64,1}:\n#      1.0e10\n#     10.0375\n#      1.34164\n#      1.00019\n#      1.0\n\nNotes\n\nThe expression of A(u) of microlensing amplification has been given by Bohdan Paczyński in\n\nPaczynski, B. 1986, ApJ, 304, 1. DOI:10.1086/164140, Bibcode:1986ApJ...304....1P\n\nThe same expression was actually found by Albert Einstein half a century earlier:\n\nEinstein, A. 1936, Science, 84, 506. DOI:10.1126/science.84.2188.506, Bibcode:1936Sci....84..506E\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.planck_freq-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.planck_freq",
    "category": "Method",
    "text": "planck_freq(frequency, temperature) -> black_body_flux\n\nPurpose\n\nCalculate the flux of a black body per unit frequency.\n\nExplanation\n\nReturn the spectral radiance of a black body per unit frequency using Planck's law\n\nB_nu(nu T) = frac2hnu ^3c^2 frac1e^frachnuk_mathrmBT - 1\n\nArguments\n\nfrequency: frequency at which the flux is to be calculated, in Hertz.\ntemperature: the equilibrium temperature of the black body, in Kelvin.\n\nBoth arguments can be either scalar or arrays of the same length.\n\nOutput\n\nThe spectral radiance of the black body, in units of W/(sr·m²·Hz).\n\nExample\n\nPlot the spectrum of a black body in 10^12 10^154 Hz at 8000 K. Use PyPlot.jl for plotting.\n\nusing PyPlot\nfrequency=logspace(12, 15.4, 1000);\ntemperature=ones(frequency)*8000;\nflux=planck_freq(frequency, temperature);\nplot(frequency, flux)\n\nNotes\n\nplanck_wave calculates the flux of a black body per unit wavelength.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.planck_wave-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.planck_wave",
    "category": "Method",
    "text": "planck_wave(wavelength, temperature) -> black_body_flux\n\nPurpose\n\nCalculate the flux of a black body per unit wavelength.\n\nExplanation\n\nReturn the spectral radiance of a black body per unit wavelength using Planck's law\n\nB_lambda(lambda T) =frac2hc^2lambda^5frac1e^frachclambda k_mathrmBT - 1\n\nArguments\n\nwavelength: wavelength at which the flux is to be calculated, in meters.\ntemperature: the equilibrium temperature of the black body, in Kelvin.\n\nBoth arguments can be either scalar or arrays of the same length.\n\nOutput\n\nThe spectral radiance of the black body, in units of W/(sr·m³).\n\nExample\n\nPlot the spectrum of a black body in 0 3 µm at 5000 K.  Use PyPlot.jl for plotting.\n\nusing PyPlot\nwavelength=linspace(0, 3e-6, 1000);\ntemperature=ones(wavelength)*5000;\nflux=planck_wave(wavelength, temperature);\nplot(wavelength, flux)\n\nNotes\n\nplanck_freq calculates the flux of a black body per unit frequency.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.polrec-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.polrec",
    "category": "Method",
    "text": "polrec(radius, angle[, degrees=true]) -> x, y\n\nPurpose\n\nConvert 2D polar coordinates to rectangular coordinates.\n\nExplanation\n\nThis is the partial inverse function of recpol.\n\nArguments\n\nradius: radial coordinate of the point.  It may be a scalar or an array.\nangle: the angular coordinate of the point.  It may be a scalar or an array of the same lenth as radius.\ndegrees (optional boolean keyword): if true, the angle is assumed to be in degrees, otherwise in radians.  It defaults to false.\n\nMandatory arguments can also be passed as the 2-tuple (radius, angle), so that it is possible to execute recpol(polrec(radius, angle)).\n\nOutput\n\nA 2-tuple (x, y) with the rectangular coordinate of the input.  If radius and angle are arrays, x and y are arrays of the same length as radius and angle.\n\nExample\n\nGet rectangular coordinates (x y) of the point with polar coordinates (r varphi) = (17 227), with angle varphi expressed in degrees.\n\nx, y = polrec(1.7, 227, degrees=true)\n# => (-1.1593972121062475,-1.2433012927525897)\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.posang-Tuple{Integer,Real,Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.posang",
    "category": "Method",
    "text": "posang(units, ra1, dec1, ra2, dec2) -> angular_distance\n\nPurpose\n\nCompute rigorous position angle of point 2 relative to point 1.\n\nExplanation\n\nComputes the rigorous position angle of point 2 (with given right ascension and declination) using point 1 (with given right ascension and declination) as the center.\n\nArguments\n\nunits: integer, can be either 0, or 1, or 2.  Describes units of inputs and\n\noutput:     * 0: everything (input right ascensions and declinations, and output       distance) is radians     * 1: right ascensions are in decimal hours, declinations in decimal degrees,       output distance in degrees     * 2: right ascensions and declinations are in degrees, output distance in       degrees\n\nra1:  right ascension or longitude of point 1\ndec1: declination or latitude of point 1\nra2: right ascension or longitude of point 2\ndec2: declination or latitude of point 2\n\nBoth ra1 and dec1, and ra2 and dec2 can be given as 2-tuples (ra1, dec1) and (ra2, dec2).\n\nOutput\n\nAngle of the great circle containing [ra2, dec2] from the meridian containing [ra1, dec1], in the sense north through east rotating about [ra1, dec1]. See units argument above for units.\n\nMethod\n\nThe \"four-parts formula\" from spherical trigonometry (p. 12 of Smart's Spherical Astronomy or p. 12 of Green' Spherical Astronomy).\n\nExample\n\nMizar has coordinates (ra, dec) = (13h 23m 55.5s, +54° 55' 31'').  Its companion, Alcor, has coordinates (ra, dec) = (13h 25m 13.5s, +54° 59' 17''). Find the position angle of Alcor with respect to Mizar.\n\nposang(1, ten(13, 25, 13.5), ten(54, 59, 17), ten(13, 23, 55.5), ten(54, 55, 31))\n# => -108.46011246802047\n\nNotes\n\nIf ra1, dec1 are scalars, and ra2, dec2 are vectors, then the output\n\nis a vector giving the distance of each element of ra2, dec2 to ra1,  dec1.  Similarly, if ra1,de1 are vectors, and ra2,dec2 are scalars,  then the output is a vector giving the distance of each element of ra1,  dec1 to ra2, dec2.  If both ra1, dec1 and ra2, dec2 are vectors  then the output is a vector giving the distance of each element of ra1,  dec1 to the corresponding element of ra2, dec2.\n\nThe function sphdist provides an alternate method of computing a spherical\n\ndistance.\n\nNote that posang is not commutative: the position angle between A and B is theta, then the position angle between B and A is 180 + theta.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.precess-NTuple{4,Real}",
    "page": "Reference",
    "title": "AstroLib.precess",
    "category": "Method",
    "text": "precess(ra, dec, equinox1, equinox2[, FK4=true, radians=true]) -> prec_ra, prec_dec\n\nPurpose\n\nPrecess coordinates from equinox1 to equinox2.\n\nExplanation\n\nThe default (ra, dec) system is FK5 based on epoch J2000.0 but FK4 based on B1950.0 is available via the FK4 boolean keyword.\n\nArguments\n\nra: input right ascension, scalar or vector, in degrees, unless the radians keyword is set to true\ndec: input declination, scalar or vector, in degrees, unless the radians keyword is set to true\nequinox1: original equinox of coordinates, numeric scalar.\nequinox2: equinox of precessed coordinates.\nFK4 (optional boolean keyword): if this keyword is set to true, the FK4 (B1950.0) system precession angles are used to compute the precession matrix. When it is false, the default, use FK5 (J2000.0) precession angles.\nradians (optional boolean keyword): if this keyword is set to true, then the input and output right ascension and declination vectors are in radians rather than degrees.\n\nOutput\n\nThe 2-tuple (ra, dec) of coordinates modified by precession.\n\nExample\n\nThe Pole Star has J2000.0 coordinates (2h, 31m, 46.3s, 89d 15' 50.6\"); compute its coordinates at J1985.0\n\nra, dec = ten(2,31,46.3)*15, ten(89,15,50.6)\n# => (37.94291666666666,89.26405555555556)\nadstring(precess(ra, dec, 2000, 1985), precision=1)\n# => \" 02 16 22.73  +89 11 47.3\"\n\nPrecess the B1950 coordinates of Eps Ind (RA = 21h 59m,33.053s, DEC = (-56d, 59', 33.053\") to equinox B1975.\n\nra, dec = ten(21, 59, 33.053)*15, ten(-56, 59, 33.053)\n# => (329.88772083333333,-56.992514722222225)\nadstring(precess(ra, dec, 1950, 1975, FK4=true), precision=1)\n# => \" 22 01 15.46  -56 52 18.7\"\n\nMethod\n\nAlgorithm from \"Computational Spherical Astronomy\" by Taff (1983), p. 24. (FK4). FK5 constants from \"Explanatory Supplement To The Astronomical Almanac\" 1992, page 104 Table 3.211.1 (https://archive.org/details/131123ExplanatorySupplementAstronomicalAlmanac).\n\nNotes\n\nAccuracy of precession decreases for declination values near 90 degrees. precess should not be used more than 2.5 centuries from 2000 on the FK5 system (1950.0 on the FK4 system).  If you need better accuracy, use bprecess or jprecess as needed.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.precess_cd",
    "page": "Reference",
    "title": "AstroLib.precess_cd",
    "category": "Function",
    "text": "precess_cd(cd, epoch1, epoch2, crval_old, crval_new[, FK4=true]) -> cd\n\nPurpose\n\nPrecess the coordinate description matrix.\n\nExplanation\n\nThe coordinate matrix is precessed from epoch1 to epoch2.\n\nArguments\n\ncd: 2 x 2 coordinate description matrix in degrees\nepoch1: original equinox of coordinates, scalar\nepoch2: equinox of precessed coordinates, scalar\ncrval_old: 2 element vector containing right ascension and declination in degrees of the reference pixel in the original equinox\ncrval_new: 2 element vector giving crval in the new equinox\nFK4 (optional boolean keyword): if this keyword is set to true, then the precession constants are taken in the FK4 reference frame. When it is false, the default is the FK5 frame\n\nOutput\n\ncd: coordinate description containing precessed values\n\nExample\n\njulia> precess_cd([20 60; 45 45], 1950, 2000, [34, 58], [12, 83])\n2×2 Array{Float64,2}:\n  48.8944  147.075\n 110.188   110.365\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library. This function should not be used for values more than 2.5 centuries from the year 1900. This function calls sec2rad, precess and bprecess.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.precess_xyz-NTuple{5,Real}",
    "page": "Reference",
    "title": "AstroLib.precess_xyz",
    "category": "Method",
    "text": "precess_xyz(x, y, z, equinox1, equinox2) -> prec_x, prec_y, prec_z\n\nPurpose\n\nPrecess equatorial geocentric rectangular coordinates.\n\nArguments\n\nx, y, z: scalars or vectors giving heliocentric rectangular coordinates.\nequinox1: original equinox of coordinates, numeric scalar.\nequinox2: equinox of precessed coordinates, numeric scalar.\n\nInput coordinates can be given also a 3-tuple (x, y, z).\n\nOutput\n\nThe 3-tuple (x, y, z) of coordinates modified by precession.\n\nExample\n\nPrecess 2000 equinox coordinates (1, 1, 1) to 2050.\n\nprecess_xyz(1, 1, 1, 2000, 2050)\n# => (0.9838854500981734,1.0110925876508692,1.0048189888146941)\n\nMethod\n\nThe equatorial geocentric rectangular coordinates are converted to right ascension and declination, precessed in the normal way, then changed back to x, y and z using unit vectors.\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.premat-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.premat",
    "category": "Method",
    "text": "premat(equinox1, equinox2[, FK4=true]) -> precession_matrix\n\nPurpose\n\nReturn the precession matrix needed to go from equinox1 to equinox2.\n\nExplanation\n\nThis matrix is used by precess and baryvel to precess astronomical coordinates.\n\nArguments\n\nequinox1: original equinox of coordinates, numeric scalar.\nequinox2: equinox of precessed coordinates.\nFK4 (optional boolean keyword): if this keyword is set to true, the FK4 (B1950.0) system precession angles are used to compute the precession matrix. When it is false, the default, use FK5 (J2000.0) precession angles.\n\nOutput\n\nA 3×3 AbstractFloat matrix, used to precess equatorial rectangular coordinates.\n\nExample\n\nReturn the precession matrix from 1950.0 to 1975.0 in the FK4 system\n\npremat(1950,1975,FK4=true)\n# => 3x3 Array{Float64,2}:\n#     0.999981    -0.00558775  -0.00242909\n#     0.00558775   0.999984    -6.78691e-6\n#     0.00242909  -6.78633e-6   0.999997\n\nMethod\n\nFK4 constants from \"Computational Spherical Astronomy\" by Taff (1983), p. 24. (FK4). FK5 constants from \"Explanatory Supplement To The Astronomical Almanac\" 1992, page 104 Table 3.211.1 (https://archive.org/details/131123ExplanatorySupplementAstronomicalAlmanac).\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.rad2sec-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.rad2sec",
    "category": "Method",
    "text": "rad2sec(rad) -> seconds\n\nPurpose\n\nConvert from radians to seconds.\n\nArgument\n\nrad: number of radians.  It can be either a scalar or a vector.\n\nOutput\n\nThe number of seconds corresponding to rad.  If rad is an array, an array of the same length is returned.\n\nExample\n\nrad2sec(1)\n# => 206264.80624709636\n\nNotes\n\nUse sec2rad to convert seconds to radians.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.radec-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.radec",
    "category": "Method",
    "text": "radec(ra::Real, dec::Real[, hours=true]) -> ra_hours, ra_minutes, ra_seconds, dec_degrees, dec_minutes, dec_seconds\n\nPurpose\n\nConvert right ascension and declination from decimal to sexagesimal units.\n\nExplanation\n\nThe conversion is to sexagesimal hours for right ascension, and sexagesimal degrees for declination.\n\nArguments\n\nra: decimal right ascension, scalar or array.  It is expressed in degrees, unless the optional keyword hours is set to true.\ndec: declination in decimal degrees, scalar or array, same number of elements as ra.\nhours (optional boolean keyword): if false (the default), ra is assumed to be given in degrees, otherwise ra is assumed to be expressed in hours.\n\nOutput\n\nA 6-tuple of AbstractFloat:\n\n(ra_hours, ra_minutes, ra_seconds, dec_degrees, dec_minutes, dec_seconds)\n\nIf ra and dec are arrays, also each element of the output 6-tuple are arrays of the same dimension.\n\nExample\n\nPosition of Sirius in the sky is (ra, dec) = (6.7525, -16.7161), with right ascension expressed in hours.  Its sexagesimal representation is given by\n\nradec(6.7525, -16.7161, hours=true)\n# => (6.0,45.0,9.0,-16.0,42.0,57.9600000000064)\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.recpol-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.recpol",
    "category": "Method",
    "text": "recpol(x, y[, degrees=true]) -> radius, angle\n\nPurpose\n\nConvert 2D rectangular coordinates to polar coordinates.\n\nExplanation\n\nThis is the partial inverse function of polrec.\n\nArguments\n\nx: the abscissa coordinate of the point.  It may be a scalar or an array.\ny: the ordinate coordinate of the point.  It may be a scalar or an array of the same lenth as x.\ndegrees (optional boolean keyword): if true, the output angle is given\n\nin degrees, otherwise in radians.  It defaults to false.\n\nMandatory arguments may also be passed as the 2-tuple (x, y), so that it is possible to execute polrec(recpol(x, y)).\n\nOutput\n\nA 2-tuple (radius, angle) with the polar coordinates of the input.  The coordinate angle coordinate lies in the range -pi pi if degrees=false, or -180 180 when degrees=true.\n\nIf x and y are arrays, radius and angle are arrays of the same length as radius and angle.\n\nExample\n\nCalculate polar coordinates (r varphi) of point with rectangular coordinates (x y) = (224 -187).\n\nr, phi = recpol(2.24, -1.87)\n# => (2.9179616172938263,-0.6956158538564537)\n\nAngle varphi is given in radians.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.rhotheta-NTuple{8,Real}",
    "page": "Reference",
    "title": "AstroLib.rhotheta",
    "category": "Method",
    "text": "rhotheta(period, periastron, eccentricity, semimajor_axis, inclination, omega, omega2, epoch) -> rho, theta\n\nPurpose\n\nCalculate the separation and position angle of a binary star.\n\nExplanation\n\nThis function will return the separation rho and position angle theta of a visual binary star derived from its orbital elements.  The algorithms described in the following book will be used: Meeus J., 1992, Astronomische Algorithmen, Barth.  Compared to the examples given at page 400 and no discrepancy found.\n\nArguments\n\nperiod: period [year]\nperiastro: time of periastron passage [year]\neccentricity: eccentricity of the orbit\nsemimajor_axis: semi-major axis [arc second]\ninclination: inclination angle [degree]\nomega: node [degree]\nomega2: longitude of periastron [degree]\nepoch: epoch of observation [year]\n\nAll input parameters have to be scalars.\n\nOutput\n\nThe 2-tuple (rho theta), where\n\nrho is separation [arc second], and\ntheta is position angle (degree).\n\nExample\n\nFind the position of Eta Coronae Borealis at the epoch 2016\n\nρ, θ = rhotheta(41.623, 1934.008, 0.2763, 0.907, 59.025, 23.717, 219.907, 2016)\n# => (0.6351167848228113,214.42513388052114)\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.sec2rad-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.sec2rad",
    "category": "Method",
    "text": "sec2rad(sec) -> radians\n\nPurpose\n\nConvert from seconds to radians.\n\nArgument\n\nsec: number of seconds.  It can be either a scalar or a vector.\n\nOutput\n\nThe number of radians corresponding to sec.  If sec is an array, an array of the same length is returned.\n\nExample\n\nsec2rad(3600*30)\n# => 0.5235987755982988\n\nNotes\n\nUse rad2sec to convert radians to seconds.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.sixty-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.sixty",
    "category": "Method",
    "text": "sixty(number) -> [deg, min, sec]\n\nPurpose\n\nConverts a decimal number to sexagesimal.\n\nExplanation\n\nThe reverse of ten function.\n\nArgument\n\nnumber: decimal number to be converted to sexagesimal.\n\nOutput\n\nAn array of three AbstractFloat, that are the sexagesimal counterpart (degrees, minutes, seconds) of number.\n\nExample\n\nsixty(-0.615)\n# => 3-element Array{Float64,1}:\n#     -0.0\n#     36.0\n#     54.0\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.sphdist-NTuple{4,Real}",
    "page": "Reference",
    "title": "AstroLib.sphdist",
    "category": "Method",
    "text": "sphdist(long1, lat1, long2, lat2[, degrees=true]) -> angular_distance\n\nPurpose\n\nAngular distance between points on a sphere.\n\nArguments\n\nlong1:  longitude of point 1\nlat1: latitude of point 1\nlong2: longitude of point 2\nlat2: latitude of point 2\ndegrees (optional boolean keyword): if true, all angles, including the output distance, are assumed to be in degrees, otherwise they are all in radians.  It defaults to false.\n\nOutput\n\nAngular distance on a sphere between points 1 and 2, as an AbstractFloat.  It is expressed in radians unless degrees keyword is set to true.\n\nExample\n\nsphdist(120, -43, 175, +22)\n# => 1.5904422616007134\n\nNotes\n\ngcirc function is similar to sphdist, but may be more suitable for astronomical applications.\nIf long1, lat1 are scalars, and long2, lat2 are vectors, then the\n\noutput is a vector giving the distance of each element of long2, lat2 to  long1, lat1.  Similarly, if long1,de1 are vectors, and long2,lat2  are scalars, then the output is a vector giving the distance of each element of  long1, lat1 to long2, lat2.  If both long1, lat1 and long2,  lat2 are vectors then the output is a vector giving the distance of each  element of long1, lat1 to the corresponding element of long2, lat2.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.sunpos-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.sunpos",
    "category": "Method",
    "text": "sunpos(jd[, radians=true]) -> ra, dec, elong, obliquity\n\nPurpose\n\nCompute the right ascension and declination of the Sun at a given date.\n\nArguments\n\njd: the Julian date of when you want to calculate Sun position.  It can be either a scalar or a vector.  Use jdcnv to get the Julian date for a given date and time.\nradians (optional boolean keyword): if set to true, all output quantities are given in radians.  The default is false, so all quantities are given in degrees.\n\nOutput\n\nThe 4-tuple (ra, dec, elong, obliquity):\n\nra: the right ascension of the Sun at that date\ndec: the declination of the Sun at that date\nelong: ecliptic longitude of the Sun at that date\nobliquity: the obliquity of the ecliptic\n\nAll quantities are given in degrees, unless radians keyword is set to true (see \"Arguments\" section).  If jd is an array, arrays of the same given as jd are returned.\n\nMethod\n\nUses a truncated version of Newcomb's Sun.  Adapted from the IDL routine SUN_POS by CD Pike, which was adapted from a FORTRAN routine by B. Emerson (RGO).\n\nExample\n\n(1) Find the apparent right ascension and declination of the Sun on May 1, 1982\n\nadstring(sunpos(jdcnv(1982, 5, 1))[1:2], precision=2)\n# => \" 02 31 32.614  +14 54 34.92\"\n\nThe Astronomical Almanac gives 02 31 32.58 +14 54 34.9 so the error for this case is < 0.5\".\n\n(2) Plot the apparent right ascension, in hours, and declination of the Sun, in degrees, for every day in 2016.  Use PyPlot.jl for plotting.\n\nusing PyPlot\ndays = DateTime(2016):DateTime(2016, 12, 31);\nra, declin = sunpos(jdcnv(days));\nplot(days, ra/15); plot(days, declin)\n\nNotes\n\nPatrick Wallace (Rutherford Appleton Laboratory, UK) has tested the accuracy of a C adaptation of the present algorithm and found the following results.  From 1900-2100 sunpos gave 7.3 arcsec maximum error, 2.6 arcsec RMS.  Over the shorter interval 1950-2050 the figures were 6.4 arcsec max, 2.2 arcsec RMS.\n\nThe returned ra and dec are in the given date's equinox.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.ten",
    "page": "Reference",
    "title": "AstroLib.ten",
    "category": "Function",
    "text": "ten(deg[, min, sec]) -> decimal\nten(\"deg:min:sec\") -> decimal\n\nPurpose\n\nConverts a sexagesimal number or string to decimal.\n\nExplanation\n\nten is the inverse of the sixty function. of ten.\n\nArguments\n\nten takes as argument either three scalars (deg, min, sec) or a string. The string should have the form \"deg:min:sec\" or \"deg min sec\".  Also any iterable like (deg, min, sec) or [deg, min, sec] is accepted as argument.\n\nIf minutes and seconds are not specified they default to zero.\n\nOutput\n\nThe decimal conversion of the sexagesimal numbers provided is returned.  The output has the same dimension as the input.\n\nMethod\n\nThe formula used for the conversion is\n\nmathrmsign(mathrmdeg)left(mathrmdeg + fracmathrmmin60 + fracmathrmsec3600right)\n\nExample\n\nten(-0.0, 19, 47)\n# => -0.3297222222222222\nten(\"+5:14:58\")\n# => 5.249444444444444\nten(\"-10 26\")\n# => -10.433333333333334\nten((-10, 26))\n# => -10.433333333333334\n\nNotes\n\nThese functions cannot deal with -0 (negative integer zero) in numeric input. If it is important to give sense to negative zero, you can either make sure to pass a floating point negative zero -0.0 (this is the best option), or use negative minutes and seconds, or non-integer negative degrees and minutes.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.tic_one",
    "page": "Reference",
    "title": "AstroLib.tic_one",
    "category": "Function",
    "text": "tic_one(zmin, pixx, incr[, ra=true]) -> min2, tic1\n\nPurpose\n\nDetermine the position of the first tic mark for astronomical images.\n\nExplanation\n\nFor use in labelling images with right ascension and declination axes. This routine determines the position in pixels of the first tic.\n\nArguments\n\nzmin: astronomical coordinate value at axis zero point (degrees  or hours).\npixx: distance in pixels between tic marks (usually obtained from tics).\nincr - increment in minutes for labels (usually an even number obtained  from the procedure tics).\nra (optional boolean keyword): if true, incremental value being entered  is in minutes of time, else it is assumed that value is in else it's in minutes of arc.  Default is false.\n\nOutput\n\nThe 2 tuple (min2, tic1):\n\nmin2: astronomical coordinate value at first tic mark\ntic1: position in pixels of first tic mark\n\nExample\n\nSuppose a declination axis has a value of 30.2345 degrees at its zero point.  A tic mark is desired every 10 arc minutes, which corresponds to 12.74 pixels, with increment for labels being 10 minutes. Then\n\njulia> tic_one(30.2345, 12.74, 10)\n(30.333333333333332, 7.554820000000081)\n\nyields values of min2 ≈ 30.333 and tic1 ≈ 7.55482, i.e. the first tic mark should be labeled 30 deg 20 minutes and be placed at pixel value 7.55482.\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.ticpos-Tuple{Real,Real,Real}",
    "page": "Reference",
    "title": "AstroLib.ticpos",
    "category": "Method",
    "text": "ticpos(deglen, pixlen, ticsize) -> ticsize, incr, units\n\nPurpose\n\nSpecify distance between tic marks for astronomical coordinate overlays.\n\nExplanation\n\nUser inputs number an approximate distance between tic marks, and the axis length in degrees. ticpos will return a distance between tic marks such that the separation is a round multiple in arc seconds, arc minutes, or degrees.\n\nArguments\n\ndeglen: length of axis in degrees, positive scalar\npixlen: length of axis in plotting units (pixels), postive scalar\nticsize: distance between tic marks (pixels).  This value will be  adjusted by ticpos such that the distance corresponds to a round  multiple in the astronomical coordinate.\n\nOutput\n\nThe 3-tuple (ticsize, incr, units):\n\nticsize: distance between tic marks (pixels), positive scalar\nincr: incremental value for tic marks in round units given  by the units parameter\nunits: string giving units of ticsize, either 'Arc Seconds', 'Arc Minutes', or 'Degrees'\n\nExample\n\nSuppose a 512 x 512 image array corresponds to 0.2 x 0.2 degrees on the sky. A tic mark is desired in round angular units, approximately every 75 pixels. Then\n\njulia> ticpos(0.2, 512, 75)\n(85.33333333333333, 2, \"Arc Minutes\")\n\ni.e. a good tic mark spacing is every 2 arc minutes, corresponding to 85.333 pixels.\n\nNotes\n\nAll the arguments taken as input are assumed to be positive in nature.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.tics",
    "page": "Reference",
    "title": "AstroLib.tics",
    "category": "Function",
    "text": "tics(radec_min, radec_max, numx, ticsize[, ra=true]) -> ticsize, incr\n\nPurpose\n\nCompute a nice increment between tic marks for astronomical images.\n\nExplanation\n\nFor use in labelling a displayed image with right ascension or declination axes.  An approximate distance between tic marks is input, and a new value is computed such that the distance between tic marks is in simple increments of the tic label values.\n\nArguements\n\nradec_min : minimum axis value (degrees).\nradec_min : maximum axis value (degrees).\nnumx : number of pixels in x direction.\nticsize : distance between tic marks (pixels).\nra (optional boolean keyword): if true, incremental value would be in minutes of time. Default is false.\n\nOutput\n\nA 2-tuple (ticsize, incr):\n\nticsize : distance between tic marks (pixels).\nincr : incremental value for tic labels.  The format is dependent on the optional keyword. If true (i.e for right ascension), it's in minutes of time, else it's in minutes of arc (for declination).\n\nExample\n\njulia> tics(55, 60, 100.0, 1/2)\n(0.66, 2)\n\njulia> tics(30, 60, 12, 2, true)\n(2.75, 30)\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.trueanom-Tuple{Real,Real}",
    "page": "Reference",
    "title": "AstroLib.trueanom",
    "category": "Method",
    "text": "trueanom(E, e) -> true anomaly\n\nPurpose\n\nCalculate true anomaly for a particle in elliptic orbit with eccentric anomaly E and eccentricity e.\n\nExplanation\n\nIn the two-body problem, once that the Kepler's equation is solved and E(t) is determined, the polar coordinates (r(t) theta(t)) of the body at time t in the elliptic orbit are given by\n\ntheta(t) = 2arctan left(sqrtfrac1 + e1 - e tanfracE(t)2 right)\n\nr(t) = fraca(1 - e^2)1 + ecos(theta(t) - theta_0)\n\nin which a is the semi-major axis of the orbit, and theta_0 the value of angular coordinate at time t = t_0.\n\nArguments\n\nE: eccentric anomaly.  This can be either a scalar or an array\ne: eccentricity, in the elliptic motion regime (0 leq e leq 1)\n\nOutput\n\nThe true anomaly.  If an array of eccentric anomalies is provided in input, an array of the same length as E is returned.\n\nExample\n\nPlot the true anomaly as a function of mean anomaly for eccentricity e = 0, 05, 09.  Use PyPlot.jl for plotting.\n\nusing PyPlot\nM = linspace(0, 2pi, 1001)[1:end-1];\nfor ecc in (0, 0.5, 0.9)\n    plot(M, cirrange.(trueanom.(kepler_solver.(M, ecc), ecc), 2pi))\nend\n\nNotes\n\nThe eccentric anomaly can be calculated with kepler_solver function.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.vactoair-Tuple{Real}",
    "page": "Reference",
    "title": "AstroLib.vactoair",
    "category": "Method",
    "text": "vactoair(wave_vacuum) -> wave_air\n\nPurpose\n\nConverts vacuum wavelengths to air wavelengths.\n\nExplanation\n\nCorrects for the index of refraction of air under standard conditions. Wavelength values below 2000  will not be altered.  Uses relation of Ciddor (1996).\n\nArguments\n\nwave_vacuum: vacuum wavelength in angstroms.  Can be either a scalar or an array of numbers.  Wavelengths are corrected for the index of refraction of air under standard conditions.  Wavelength values below 2000  will not be altered, take care within 1  2000 .\n\nOutput\n\nAir wavelength in angstroms, same number of elements as wave_vacuum.\n\nMethod\n\nUses relation of Ciddor (1996), Applied Optics 35, 1566 (http://adsabs.harvard.edu/abs/1996ApOpt..35.1566C).\n\nExample\n\nIf the vacuum wavelength is w = 2000, then vactoair(w) yields an air wavelength of 1999.353.\n\nNotes\n\nairtovac converts air wavelengths to vacuum wavelengths.\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.xyz",
    "page": "Reference",
    "title": "AstroLib.xyz",
    "category": "Function",
    "text": "xyz(jd[, equinox]) -> x, y, z, v_x, v_y, v_z\n\nPurpose\n\nCalculate geocentric x, y, and z and velocity coordinates of the Sun.\n\nExplanation\n\nCalculates geocentric x, y, and z vectors and velocity coordinates (dx, dy and dz) of the Sun.  (The positive x axis is directed towards the equinox, the y-axis, towards the point on the equator at right ascension 6h, and the z axis toward the north pole of the equator).  Typical position accuracy is 10^-4 AU (15000 km).\n\nArguments\n\njd: number of Reduced Julian Days for the wanted date.  It can be either a scalar or a vector.\nequinox (optional numeric argument): equinox of output. Default is 1950.\n\nYou can use juldate to get the number of Reduced Julian Days for the selected dates.\n\nOutput\n\nThe 6-tuple (x y z v_x v_y v_z), where\n\nx y z: scalars or vectors giving heliocentric rectangular coordinates (in AU) for each date supplied.  Note that sqrtx^2 + y^2 + z^2 gives the Earth-Sun distance for the given date.\nv_x v_y v_z: velocity vectors corresponding to x y, and z.\n\nExample\n\nWhat were the rectangular coordinates and velocities of the Sun on 1999-01-22T00:00:00 (= JD 2451200.5) in J2000 coords?  Note: Astronomical Almanac (AA) is in TDT, so add 64 seconds to UT to convert.\n\njd = juldate(DateTime(1999, 1, 22))\n# => 51200.5\nxyz(jd + 64./86400., 2000)\n# => (0.5145687092402946,-0.7696326261820777,-0.33376880143026394,0.014947267514081075,0.008314838205475709,0.003606857607574784)\n\nCompare to Astronomical Almanac (1999 page C20)\n\n            x  (AU)        y  (AU)     z (AU)\nxyz:      0.51456871   -0.76963263  -0.33376880\nAA:       0.51453130   -0.7697110   -0.3337152\nabs(err): 0.00003739    0.00007839   0.00005360\nabs(err)\n    (km):   5609          11759         8040\n\nNOTE: Velocities in AA are for Earth/Moon barycenter       (a very minor offset) see AA 1999 page E3\n\n           x vel (AU/day) y vel (AU/day)   z vel (AU/day)\nxyz:      -0.014947268   -0.0083148382    -0.0036068576\nAA:       -0.01494574    -0.00831185      -0.00360365\nabs(err):  0.000001583    0.0000029886     0.0000032076\nabs(err)\n (km/sec): 0.00265        0.00519          0.00557\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.ydn2md-Tuple{Integer,Integer}",
    "page": "Reference",
    "title": "AstroLib.ydn2md",
    "category": "Method",
    "text": "ydn2md(year, day) -> date\n\nPurpose\n\nConvert from year and day number of year to a date.\n\nExplanation\n\nReturns the date corresponding to the day of year.\n\nArguments\n\nyear: the year, as a scalar integer.\nday: the day of year, as an integer.  It is can be either a scalar or array of integers.\n\nOutput\n\nThe date, of Date type, of textday - 1 days after January 1st of year.\n\nExample\n\nFind the date of the 60th and 234th days of the year 2016.\n\nydn2md(2016, [60, 234])\n# => 2-element Array{Date,1}:\n#     2016-02-29\n#     2016-08-21\n\nNote\n\nymd2dn converts from a date to day of the year.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.ymd2dn",
    "page": "Reference",
    "title": "AstroLib.ymd2dn",
    "category": "Function",
    "text": "ymd2dn(date) -> number_of_days\n\nPurpose\n\nConvert from a date to day of the year.\n\nExplanation\n\nReturns the day of the year for date with January 1st being day 1.\n\nArguments\n\ndate: the date with Date type.  Can be a single date or an array of dates.\n\nOutput\n\nThe day of the year for the given date.  If date is an array, returns an array of days.\n\nExample\n\nFind the days of the year for March 5 in the years 2015 and 2016 (this is a leap year).\n\nymd2dn([Date(2015, 3, 5), Date(2016, 3, 5)])\n# => 2-element Array{Int64,1}:\n#     64\n#     65\n\nNote\n\nydn2md converts from year and day number of year to a date.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.zenpos",
    "page": "Reference",
    "title": "AstroLib.zenpos",
    "category": "Function",
    "text": "zenpos(jd, latitude, longitude) -> zenith_right_ascension, declination\nzenpos(date, latitude, longitude, tz) -> zenith_right_ascension, declination\n\nPurpose\n\nReturn the zenith right ascension and declination in radians for a given Julian date or a local civil time and timezone.\n\nExplanation\n\nThe local sidereal time is computed with the help of ct2lst, which is the right ascension of the zenith. This and the observatories latitude (corresponding to the declination) are converted to radians and returned as the zenith direction.\n\nArguments\n\nThe function can be called in two different ways. The arguments common to both methods are latitude and longitude:\n\nlatitude : latitude of the desired location.\nlongitude : longitude of the desired location.\n\nThe zenith direction can be computed either by providing the Julian date:\n\njd : the Julian date of the date and time for which the zenith position is desired.\n\nor the time zone and the date:\n\ntz: the time zone (in hours) of the desired location (e.g. 4 = EDT, 5 = EST)\ndate: the local civil time with type DateTime. It can be a scalar or an array.\n\nOutput\n\nA 2-tuple (ra, dec):\n\nra : the right ascension (in radians) of the zenith.\ndec : the declination (in radians) of the zenith.\n\nExample\n\njulia> zenpos(DateTime(2017, 04, 25, 18, 59), 43.16, -24.32, 4)\n(0.946790432684706, 0.7532841051607526)\n\njulia> zenpos(jdcnv(2016, 05, 05, 13, 41), ten(35,0,42), ten(135,46,6))\n(3.5757821152779536, 0.6110688599440813)\n\nNotes\n\nCode of this function is based on IDL Astronomy User's Library.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.POLELATLONG",
    "page": "Reference",
    "title": "AstroLib.POLELATLONG",
    "category": "Constant",
    "text": "List of locations of North Magnetic Pole since 1590.\n\nThis is provided by World Magnetic Model (https://www.ngdc.noaa.gov/geomag/data/poles/NP.xy).\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.observatories",
    "page": "Reference",
    "title": "AstroLib.observatories",
    "category": "Constant",
    "text": "List of observing sites.  The observatories have Observatory type.\n\n\n\n"
},

{
    "location": "ref.html#AstroLib.planets",
    "page": "Reference",
    "title": "AstroLib.planets",
    "category": "Constant",
    "text": "List of planets of the Solar System, from Mercury to Pluto.  The elements of the list have Planet type.\n\nReference for most quantities is the Planetary Fact Sheet: http://nssdc.gsfc.nasa.gov/planetary/factsheet/index.html\n\n\n\n"
},

{
    "location": "ref.html#Types-and-functions-organized-alphabetically-1",
    "page": "Reference",
    "title": "Types and functions organized alphabetically",
    "category": "section",
    "text": "Modules = [AstroLib]"
},

]}
