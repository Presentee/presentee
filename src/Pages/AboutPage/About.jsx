import React from 'react';
import NavigationBar from 'Navigation';
import { HomeContainer } from 'CustomComponents/Containers';

export default function AboutPage() {
    return (
        <>
            <NavigationBar/>
            <HomeContainer>
                <div style={{ position: 'relative', minHeight: '100vh' }}>
                    <div style={{position: 'relative', zIndex: 1}}>
                        <h1>About Presentee</h1>

                        <h2>Why a presenting tool?</h2>
                        <p>
                            In today's fast-paced world, keeping your audience engaged is more
                            challenging than ever. Presentee bridges the gap between presenters and
                            their audience, providing a suite of interactive tools and features
                            that facilitate seamless communication and collaboration.
                        </p>

                        <h2>Key Features:</h2>
                        <ol style={{ textAlign: 'left' }}>
                            <li>
                                Seamless Integration: Presentee supports .pdf files, making
                                it easy to use your existing presentations and materials.
                            </li>
                            <li>
                                (coming soon!) Customizable Polls and Questions: Engage your audience with real-time
                                polls and questions, giving you valuable insights and encouraging
                                interaction.
                            </li>
                            <li>
                                PresenterView and AudienceView: Presentee offers different viewing
                                modes, allowing presenters to have full control over their slides
                                while providing the audience with a tailored viewing experience.
                            </li>
                            <li>
                                Privacy and Security: We run everything through Amazon services to
                                ensure privacy that your presentations are only visible to the
                                intended audience.
                            </li>
                            <li>
                                Interactive Dashboard: Our user-friendly dashboard allows you to
                                manage all your presentations!
                            </li>
                            <li>
                                (coming soon!) Multi-Screen Support: Presentee's PresenterView supports a
                                dual-screen setup, enabling presenters to see presentation notes,
                                upcoming slides, and audience questions on a second screen while
                                presenting.
                            </li>
                        </ol>

                        <h2>Our Team</h2>
                        <p>
                            Presentee is brought to you by a dedicated team of amature developers and
                            designers, who are at least somewhat passionate about creating a better
                            presentation experience. Our collective grading drives us to 
                            develop innovative solutions that redefine the way presentations are 
                            created and delivered.
                        </p>
                    </div>

                    {/* profiles */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '10px', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="alex.png" alt="Developer 1" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '5px' }} />
                            <h3>Alex Vitellaro</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="chris.png" alt="Developer 2" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '5px' }} />
                            <h3>Chris Liudahl-Rackley</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="Leo.jpg" alt="Developer 3" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '5px' }} />
                            <h3>Leo Huang</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="mohamed.png" alt="Developer 4" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '5px' }} />
                            <h3>Mohamed Elfergani</h3>
                        </div>
                    </div>
                </div>
            </HomeContainer>
        </>
    );
}