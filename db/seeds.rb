# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PostByEmployee.destroy_all
GetEmployee.destroy_all
PostHouse.destroy_all
PostHouseWanted.destroy_all
Blog.destroy_all
Community.destroy_all
User.destroy_all


##############################

@aslan = User.create!(
    username: 'aslan', 
    email: 'aslanshaken@gmail.com',
    password: '123456',
    password_reset_token: '', 
    password_reset_sent_at: '',
    first_name: 'Aslan',
    last_name: 'Shaken',
    dob: '01/26/1997',
    cell_phone: 9299285292,
    gender: 'male',
    birth_place: 'Shymkent',
    about_me: 'A software developer who is eagle to build projects and make positive impact on the world',
    facebook: 'somelink', 
    instagram: 'somelink',
    current_city: 'New York'
)

@bob = User.create!(
    username: 'bob', 
    email: 'bob@gmail.com',
    password: '123456',
    password_reset_token: '', 
    password_reset_sent_at: '',
    first_name: 'Bob',
    last_name: 'Dava',
    dob: '04/23/1990',
    cell_phone: 3475760900,
    gender: 'male',
    birth_place: 'Brooklyn',
    about_me: 'Easy going person who loves coding',
    instagram: 'somelink',
    current_city: 'New Jersey'
)

#############################



GetEmployee.create!(
    job_name: 'CDL Drivers',
    category:'drivers', 
    description:'Non-emergency medical transportation - Transporting clients to and from medical appointments/ Dialysis.', 
    city: 'New-York',
    cellphone: 3475769090,
    email: 'cdldriversnyc@yahoo.com',
    user: @aslan
)
GetEmployee.create!(
    job_name: 'Logistic Drivers',
    category:'drivers', 
    description:'Ability to work in a fast-paced environment Strong attention to detail Problem solving & decision making skills One year of experience in logistics driving.', 
    city: 'New-York',
    cellphone: 9175486029,
    email: 'logisticsinnyc@gmail.com',
    user: @bob
)
GetEmployee.create!(
    job_name: 'Experienced NYC Server wanted',
    category:'restaurant', 
    description:'Must be able to work nights, weekends & holidays. Food and wine knowledge required. Great opportunity for the right person. Looking to set up interviews A.S.A.P.', 
    city: 'New-York',
    cellphone: 8523697952,
    email: 'waiteratflatiron@mail.com',
    user: @aslan
)
GetEmployee.create!(
    job_name: 'FANTASTIC Restaurant MANAGER',
    category:'restaurant', 
    description:'Please have 2 years experience in fine dining management.Familiarity with French American cuisine and wine is helpful.Proficiency with POS a must.', 
    city: 'New-Jersey',
    cellphone: 3475829436,
    email: 'twentyfivenj@outlook.com',
    user: @bob
)
GetEmployee.create!(
    job_name: 'Production assistant',
    category:'entertainment', 
    description:'Manhattan based film / tv production company seeking a production assistant . Must be driven , personable , general knowledge of the industry , willing to travel if necessary. ', 
    city: 'New-Jersey',
    cellphone: 9586395685,
    email: 'filmontheway@yahoo.com',
    user: @aslan
)


#############################



PostByEmployee.create!(
    title: 'Looking for job as Entry Level Software Engineer Position',
    name: 'Alan',
    about:'A software engineer with 2 years of experiance.', 
    category:'software engineer', 
    city: 'New-Jersey',
    cellphone: 9299289595,
    email: 'alannyc@gmail.com',
    user: @aslan
)
PostByEmployee.create!(
    title: 'Looking for job as Bookkeeper',
    name: 'John',
    about:'FREELANCE Bookkeeper available P/T .', 
    category:'bookkeeper', 
    city: 'New-York',
    cellphone: 9284568565,
    email: 'johnbookkeeper@yahoo.com',
    user: @bob
)
PostByEmployee.create!(
    title: 'Looking for job as Nanny',
    name: 'Vanessa',
    about:'A babysitter/Nanny looking for work.', 
    category:'babysitter', 
    city: 'New-York',
    cellphone: 9347565896,
    email: 'vanessabb@gmail.com',
    user: @aslan
)
PostByEmployee.create!(
    title: 'Looking for job as Personal Driver',
    name: 'St',
    about:'I have over seventeen years of experience as a personal Driver.', 
    category:'driver', 
    city: 'New-York',
    cellphone: 3475966085,
    email: 'st90@mail.com',
    user: @bob
)


#############################



PostHouse.create!(
    name: '1BR HIGH END BY A C TRAINS * LAUNDRY & ROOF * NO FEE',
    description:'Massive 1Br/1Ba high end apt with tons of space ,huge living room and Office/Baby Room in the apt ,tons of closet space ', 
    city: 'New-York',
    date_move_in: '05/02/2021',
    price: 2000, 
    cellphone: 3475966085,
    email: 'ghyb91@mail.com',
    user: @aslan,
    state: "NY",
    bathroom: '1bd'
)
PostHouse.create!(
    name: 'Sun-filled railroad apt w/ bedroom + office/nursery AND outdoor patio',
    description:'Sun-filled 1.5-bedroom railroad apartment on 2nd floor of a three story, owner-occupied, brownstone in South Park Slope, featuring private 15 x 15 outdoor patio.', 
    city: 'New-Jersey',
    date_move_in: '04/02/2021', 
    price: 1800, 
    cellphone: 3478589699,
    email: 'bob190@mail.com',
    user: @bob,
    state: "NJ",
    bathroom: '1.5bd'
)

#############################

PostHouseWanted.create!(
    name: 'Looking for 1 bd apartment in Brookyn',
    about_me:'A nice person who is willing to pay on time',
    state: 'NY', 
    city: 'Brooklyn',
    date_move_in:'04/25/2021', 
    bathroom:'1bd',
    cellphone: 9299285292, 
    email:'aslanshaken@gmail.com', 
    user: @aslan
)

PostHouseWanted.create!(
    name: 'Looking for 2 bd apartment in Jersey City',
    about_me:'Clean guy is looking for 2 bd for himself',
    state: 'NJ', 
    city: 'Jersey City',
    date_move_in:'05/04/2021', 
    bathroom:'2bd',
    cellphone: 3475760900, 
    email:'bob@gmail.com', 
    user: @bob
)

############################

Blog.create!(
    title:'Biggest Qazaq Community in the USA',
    name:'Aslan Shaken', 
    description:'Today, we most likely can find Qazaq community in the USA. After being here 5 years, I realized how Qazaq community has been growing so fast.',
    email:'aslanshaken@gmail.com', 
    user: @aslan
)

Blog.create!(
    title:'Qazaq Community in the USA by Americans',
    name:'Bob Dave', 
    description:'As living in the USA for whole my life, I have been watching how QazaQ comminity has been growing so fast',
    email:'bob@gmail.com', 
    user: @bob
)

############################


Community.create!(
    name_community: 'Qazaq Associte in the USA',
    state: 'NY',
    city: 'New-York',
    members_count: 500,
    contact_name: 'Aslan Shaken',
    contact_email: 'aslanshaken@gmail.com',
    contact_phone: 9299285292,
    facebook:'someurl', 
    telegram:'someurl', 
    whatsapp:'someurl',
    user: @aslan
)

Community.create!(
    name_community: 'Qazaq Republic',
    state: 'FL',
    city: 'Miami',
    members_count: 300,
    contact_name: 'Talga',
    contact_email: 'talga@gmail.com',
    contact_phone: 3477578989,
    facebook:'someurl', 
    telegram:'someurl', 
    whatsapp:'someurl',
    user: @aslan
)

############################

puts "#{User.count} users created"
puts "#{GetEmployee.count} GetEmployee created"
puts "#{PostByEmployee.count} PostByEmployee created"
puts "#{PostHouse.count} houses created"
puts "#{PostHouseWanted.count} houses wanted created"
puts "#{Blog.count} blogs created"
puts "#{Community.count} houses created"