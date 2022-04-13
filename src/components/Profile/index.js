import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile(){
    const [projects] = useState([
        {
          name: 'Budget Tracker',
          githuburl: 'https://github.com/sandy3392/legendary-waddle',
          image: 'https://user-images.githubusercontent.com/89868916/160260254-6936bf3d-a8e9-4c33-88fb-34734f07fbd9.png',
          description: 'This is a budget tracker app with offline functionality wehre you can add and delete expenses with and without internet connectivity'
        },
        {
          name: 'Photo Port',
          githuburl: 'https://github.com/sandy3392/photo-port',
          image: 'https://user-images.githubusercontent.com/89868916/160260430-4f39bb0c-d440-44e7-84f3-54c3a109030f.png',
          description: 'This is a website created for a photographer with all their work using MERN',
        },
        {
          name: 'Social Media Backend',
          githuburl: 'https://github.com/sandy3392/cautious-octo-spoon',
          image: 'https://user-images.githubusercontent.com/89868916/158085540-60c61323-41f3-483c-8516-bca21e74713d.png',
          description: 'This is a Social Media backend Api Application where we have the end to end backend setup for creating users , their thoughts & reactions'
        },
        {
          name: 'Weather Dashboard',
          githuburl: 'https://github.com/sandy3392/weather-dashboard',
          image: 'https://user-images.githubusercontent.com/89868916/147793233-e5cbb933-5094-47c4-8780-d19fe2f0d6ce.png',
          description:'user can search for a city and get todays weather and the next 5 days forecast searched city will be stored in local storage and user can click on the saved cities to find the weather forecast',
        },
        {
          name: 'NoteTaker App',
          githuburl: 'https://github.com/sandy3392/note-taker',
          image: 'https://user-images.githubusercontent.com/89868916/150701180-0baa6f90-4098-4cd9-bed8-02168d351b3f.png',
          description: 'Note taker app is to take notes and save them online and users will be able to access the notes anytime anywhere'
        },
        {
          name: 'Recipe Search',
          githuburl: 'https://github.com/cmrotruck/recipe-search',
          image: 'https://user-images.githubusercontent.com/89868916/160260655-0b62ae78-d57b-4dee-8e14-bb19670e6182.png',
          description: 'A website that allows users to search for a recipe and has the ability to give nutritional information'
        },
        {
          name: 'Drink And Draw',
          githuburl: 'https://github.com/sandy3392/drink-and-draw',
          image: 'https://user-images.githubusercontent.com/89868916/163282858-662fd889-802f-415b-b350-0c024e174cfa.png',
          description: 'Drink And Draw is an Ecommerce website where you can order a package which includes a drink and materials to paint a picture for yourself or for a group'
        },
      ]);
    return (
        <div>
            <div className='flex-row mx-4'>
                {projects.map((project,i) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={project.image} key = {project.name}/>
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>
                             {project.description}
                            </Card.Text>
                            <Button href={project.githuburl} >Github Url</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            
        </div>
    );
}
export default Profile;