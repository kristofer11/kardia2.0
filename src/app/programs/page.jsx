import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';

const page = () => {
    return (
        <main className={`${styles.programsMain} page-main`}>
            <Banner
                img='/banners/programs-banner.jpeg'
                alt='Leather-bound books'
                title={
                    <>
                        <h1 className='homeOverlayText'> Program</h1>
                        <h1 className='homeOverlayText'> Options</h1>
                    </>
                }
                strength='333'
            />
            <article className={`page-content`}>
                <section className={styles.program}>
                    <h3>Two Full Days In-person</h3>
                    <p>Our feature program option offers two full days in-person a week. This includes enrichment classes (art/music/PE), with history,  science, grammar, and writing taught at school. You will also get a formal report for your records. However, the best part is that parents may drop students off and leave on in-person days. For your three at-home days, there will be video lessons for more complex subjects. We send out a curriculum list for easy purchasing. Kardia also provides weekly lesson plans, and a monthly in-person, over-the-phone, or online parent-teacher check-in.</p>
                    <p>
                        Kardia Classical School is a member of the Association of Classical Christian Schools <a href='https://classicalchristian.org/https://classicalchristian.org/' target='_blank'>(ACCS)</a>. Please see the teacher job description (see document section below) for more information about daily expectations.
                    </p>
                    <Image
                        src='/images/sitting.png'
                        width='846'
                        height='539'
                        alt='Five children sitting on floor in Kardia Classical uniforms'
                    />
                </section>
                <section className={styles.program}>
                    <h3>Pre-Kindergarten</h3>
                    <p>Kardia Classical School offers a Pre-Kindergarten program designed to meet the needs of the child who is age four and potty trained by August 31. The goal is to provide a loving and nurturing Christian environment where children can grow and progress in all areas for the glory of God. The developmentally centered curriculum incorporates a variety of techniques, resources, materials and hands-on experiences in order to address different learning styles. Children develop a love for learning and school through hands-on experiences, discussions and explorations.</p>
                    <p>The Pre-Kindergarten curriculum prepares a child for kindergarten and is structured to be fun, yet challenging. The program involves active learning and is devised to address the needs of the whole child. Activities and materials engage the students in social, physical, emotional and intellectual development.</p>
                    <Image
                        src='/images/tuesday.jpg'
                        alt='Two girls creating Christmas crafts with pipe cleaners.'
                        width='1024'
                        height='870'
                    />
                </section>
                <section className={styles.program}>
                    <h3>"Tuesday Camp" - Enrichment Half Day</h3>
                    <p>This class will be held on Tuesdays 10:00AM - 2:00PM . This session will have a different overall theme each quarter and will include all kinds of STEAM activities. STEAM is science, technology, engineering, art, and music.</p>
                    <p>
                        You can sign up for all four quarters ahead of time if you want to save space for your child(ren). There are eight weeks in each quarter. This option can be chosen in conjunction with another program option. Uniforms are not required on Tuesday Camp days.
                    </p>
                    <p><strong>Price per session: $35</strong></p>
                    <p>
                        We will also have a “drop-in” option for a slightly higher daily fee. See the tuition and fees tab for more information.
                    </p>
                    <Image
                        src='/images/at-home.jpg'
                        width='1024'
                        height='768'
                        alt='Three students of various ages working on school work at kitchen table.'
                    />
                </section>
                <section className={styles.program}>
                    <h3><em>A La Carte</em> Options</h3>
                    <Image
                        src='/images/alacarte.png'
                        width='758'
                        height='281'
                        alt='Chart showing a la carte options for Kardia programs'
                    />
                                        <p>Kardia Classical School is starting to offer individual classes for math, phonics and grammar. Each class will come with a set of daily or weekly videos, as well as instructions on how the class will operate. Parents will be in charge of purchasing some materials for each class. Please see individual class descriptions below.</p>
                    <h5>
                        <strong>Saxon Math Grades 1 & 2: </strong>
                    </h5>
                    <p style={{ textAlign: 'left' }}>
                        Saxon Math has consistently been one of homeschoolers’ and teachers’ top choices when it comes to math curriculum. Saxon’s incremental spiral-approach teaches students information in small amounts, and continually repeats concepts to keep newly acquired skills fresh and active. In these videos, students will work alongside Mrs. Molina as she introduces the new concept, activates prior knowledge, and goes through the lesson worksheets with your child. Use the back side of the worksheets for remediation or extra practice. Assessments will need parent monitoring to make sure the student is on track and fully understanding. Materials needed for this class are the student textbook and some hands-on manipulatives.
                    </p>
                    <h5>
                        <strong>Saxon Math Grades 3-5: </strong>
                    </h5>
                    <p style={{ textAlign: 'left' }}>
                        Saxon Math has consistently been one of homeschoolers’ and teachers’ top choices when it comes to math curriculum. Saxon’s incremental spiral-approach teaches students information in small amounts, and continually repeats concepts to keep newly acquired skills fresh and active. In these videos, students will work alongside Mrs. Whitfield, while she goes through the daily  lesson, introduces new concepts, goes over the lesson practice, and gives reminders for the upcoming lesson. Students will complete the written practice on their own or with a parent. If your child is not a strong reader, they will need some assistance on the written practice. Materials needed for this class are the student textbook and some hands-on manipulatives.
                    </p>
                    <h5>
                        <strong>Mathematics Grades 6-8:</strong>
                    </h5>
                    <p style={{ textAlign: 'left' }}>
                        For middle school math, we switch to a new curriculum that utilizes unit-based learning for our more logic minded students. Developmentally, students at this age are ready for unit-based learning and to really dig in deep within each topic and subject. In these videos, students will work alongside Mrs. Hvattum, as she introduces the new concepts, works through the Know-It-Notebook full of lesson examples and vocabulary, and does example problems from each lesson. Materials needed for this class are the student textbook, student Know-It-Notebook, a graphing calculator (7th-8th) or scientific calculator (6th), and some hands-on manipulatives.
                    </p>
                    <h5>
                        <strong>Phonics Grades K-2:  </strong>
                    </h5>
                    <p style={{ textAlign: 'left' }}>
                        Saxon Phonics and Spelling combines systematic, explicit instruction with daily practice opportunities and ongoing assessment to ensure prior knowledge sticks and new knowledge accumulates. Saxon Phonics and Spelling engages the whole student by offering a comprehensive, multisensory approach to mastering critical foundational skills. In these videos, students will work alongside Mrs. Molina as she helps them learn and review their letters, as well as sounds, including digraphs, diphthongs, trigraphs, hard and soft vowel sounds, bossy r, ghost letters, and so much more. Saxon Phonics and Spelling helps children understand the rules behind the spelling of a word, and in turn, helps them sound them our correctly as they learn to read.  Materials needed for this class include phonics readers, reading tiles, a letter strip, and worksheets (all purchased through Kardia Classical School).
                    </p>
                    <h5>
                        <strong>Shurley English Grammar Grades 1-6: </strong>
                    </h5>
                    <p style={{ textAlign: 'left' }}>
                        The Shurley English curriculum has assembled a unique combination of features and strategies to provide for student success in grammar, skills, writing, and reading. These features are logically, sequentially, and systematically woven into the curriculum to provide a solid foundation for lifetime literacy. In these once a week videos, students will work alongside Mrs. Hvattum (Grades 1-3) and Mrs. Whitfield (Grades 4-6), as they introduce grammar new concepts, sing jingles, as well as practice the Shurley English Question and Answer flow with many practice sentences. You will be surprised at how quickly each student picks up new grammar concepts using this method. Materials needed for this class include a student workbook and a teacher manual.
                    </p>
                </section>

            </article>
        </main>
    )
}

export default page