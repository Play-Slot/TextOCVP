import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Abstract from "../components/Abstract"
import Affiliation from "../components/Affiliation";
import Author from "../components/Author";
import CarouselComponent from "../components/Carousel";
import Citation from "../components/Citation";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import LinkGroup from "../components/LinkGroup";
import Thanks from "../components/Thanks"
import Title from "../components/Title"



const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%]
                       lg:max-w-4xl">
            {children}
        </div>
    )
}


export const Head: HeadFC = () => <title>TextOCVP: Object-Centric Image to Video Generation with Language Guidance </title>

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            <main className="">
                <Article>
                    {/* Title */}
                    <Title>
                      TextOCVP: Object-Centric Image to Video Generation with Language Guidance
                    </Title>

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-lg mb-2.5 mt-0 leading-none">
                        <Author website={"http://angelvillarcorrales.com/templates/home.php"} firstAuthor={true} affiliations={""}>Angel Villar-Corrales</Author>
                        <Author website={""} firstAuthor={true} affiliations={""}>Gjergj Plepi</Author>
                        <Author website={"https://www.ais.uni-bonn.de/behnke/"} firstAuthor={false} affiliations={""}>Sven Behnke</Author>
                    </div>

                    <Thanks>* Indicates equal contribution</Thanks>

                    {/* Affiliations */}
                    <div className="flex flex-wrap justify-center text-base mb-4 mt-0 leading-none">
                        <Affiliation website={"https://www.ais.uni-bonn.de/index.html"} number={""}>Autonomous Intelligent Systems, University of Bonn</Affiliation>
                    </div>

                    {/* Links */}
                    <LinkGroup
                        arxivUrl={""}
                        pdfUrl={""}
                        otherUrls={
                          [
                              ["TODO", "BibTex"],
                              ["https://github.com/angelvillar96/TextOCVP", "Code"],
                          ]
                        }
                    />

                    {/* Abstract */}
                    <Abstract>
                      Accurate and flexible world models are crucial for autonomous systems to reason about          their surroundings and predict future outcomes. Object-centric world models, equipped with a
                      structured latent space, have recently shown strong capabilities to model object dynamics and interactions. However, existing approaches struggle to scale to complex datasets and fail to incorporate external guidance, limiting their effectiveness as world models in robotic applications. In this work, we propose TextOCVP, an object-centric model for image-to-video generation with language guidance, enabling it to function as a world model for forecasting future scene dynamics conditioned on textual information. TextOCVP parses an observed scene into object representations, called slots, and utilizes a text-conditioned transformer predictor to forecast future object states and video frames. Our approach jointly models object dynamics and interactions while incorporating textual guidance, thus leading to accurate and controllable predictions. We show that the structured latent space of our method provides enhanced control over the prediction process, outperforming existing image-to-video generative models across different tasks.
                    </Abstract>


                    <Heading>TextOCVP Architecture</Heading>
                    <div>
                      Overview of TextOCVP model. <br></br>
                      <b> a) Overview: </b>  TextOCVP parses the reference frame into object slot representations.
                      The text-conditioned object-centric predictor module models the object dynamics and interactions, incorporating information from the textural description to predict future object states, which can be decoded into frames.
                      <br></br>
                      <b> b) Predictor: </b> Overview of our proposed text-conditioned object-centric predictor module.
                    </div>
                    <br></br>


                    <div class="image-container">
                        <img src="imgs/main.png" alt="Main" class="img1"></img>
                        <img src="imgs/predictor.png" alt="Predictor" class="img2"></img>
                    </div>



                    <Heading> PlaySlots Predictions </Heading>




                    <Heading> Benchmarking </Heading>

                    <div>
                      TextOCVP outperforms all baselines on the CATER dataset, and performs among the
                      best image-to-video generation models on the more challenging CLIPort dataset.
                    </div>
                    <br></br>

                    <div class="tables">
                      <figure>
                        <figcaption>Benchmark on CATER</figcaption>
                        <img src="imgs/benchmark_1.png" alt="Benchmark on CATER" class="quant_00"></img>
                      </figure>
                      <figure>
                        <figcaption>Benchmark on CLIPport</figcaption>
                        <img src="imgs/benchmark_2.png" alt="Benchmark on CLIPort" class="quant_01"></img>
                      </figure>
                    </div>
                    <br></br>

                    <div>
                      TODO
                    </div>

                    <div class="image-container">
                        <img src="imgs/qual_imgs/qual_cater.png" alt="qual_01" class="qual_00"></img>
                        <img src="imgs/qual_imgs/qual_cliport.png" alt="qual_02" class="qual_01"></img>
                    </div>



                    <Heading> Controllability </Heading>

                    TODO


                    {/* MetaWorld: Button-Press */}
                    <div>
                      <br></br>
                      <a class="subtitle">MetaWorld: Button-Press</a>
                    </div>

                    <div class="gif-container">
                        <div class="gif-item">
                          <div class="gif-title">Latent Predictions</div>
                          <img src="GIFs/Behaviors/ButtonPress_00/pred_GIF_frames.gif" alt="Pred"></img>
                        </div>
                        <div class="gif-item">
                          <div class="gif-title">Predicted Slot Masks</div>
                          <img src="GIFs/Behaviors/ButtonPress_00/masks_GIF_masks.gif" alt="Masks"></img>
                        </div>
                        <div class="gif-item">
                          <div class="gif-title">Simulated Execution</div>
                          <img src="GIFs/Behaviors/ButtonPress_00/sim_GIF_frames.gif" alt="Sim"></img>
                      </div>
                    </div>
                    <div class="gif-container">
                        <div class="gif-item">
                          {/* <div class="gif-title">Latent Predictions</div> */}
                          <img src="GIFs/Behaviors/ButtonPress_01/pred_GIF_frames.gif" alt="Pred"></img>
                        </div>
                        <div class="gif-item">
                          {/* <div class="gif-title">Predicted Slot Masks</div> */}
                          <img src="GIFs/Behaviors/ButtonPress_01/masks_GIF_masks.gif" alt="Masks"></img>
                        </div>
                        <div class="gif-item">
                          {/* <div class="gif-title">Simulated Execution</div> */}
                          <img src="GIFs/Behaviors/ButtonPress_01/sim_GIF_frames.gif" alt="Sim"></img>
                      </div>
                    </div>
                    <div class="gif-container">
                        <div class="gif-item">
                          {/* <div class="gif-title">Latent Predictions</div> */}
                          <img src="GIFs/Behaviors/ButtonPress_02/pred_GIF_frames.gif" alt="Pred"></img>
                        </div>
                        <div class="gif-item">
                          {/* <div class="gif-title">Predicted Slot Masks</div> */}
                          <img src="GIFs/Behaviors/ButtonPress_02/masks_GIF_masks.gif" alt="Masks"></img>
                        </div>
                        <div class="gif-item">
                          {/* <div class="gif-title">Simulated Execution</div> */}
                          <img src="GIFs/Behaviors/ButtonPress_02/sim_GIF_frames.gif" alt="Sim"></img>
                      </div>
                    </div>


                    {/* MetaWorld: Button-Press */}
                    <div>
                      <br></br>
                      <a class="subtitle">BlockPush</a>
                    </div>

                    <div class="gif-container">
                        <div class="gif-item">
                          <div class="gif-title">Latent Predictions</div>
                          <img src="GIFs/Behaviors/BlockPush_00/pred_GIF_frames.gif" alt="Pred"></img>
                        </div>
                        <div class="gif-item">
                          <div class="gif-title">Predicted Slot Masks</div>
                          <img src="GIFs/Behaviors/BlockPush_00/masks_GIF_masks.gif" alt="Masks"></img>
                        </div>
                        <div class="gif-item">
                          <div class="gif-title">Simulated Execution</div>
                          <img src="GIFs/Behaviors/BlockPush_00/sim_GIF_frames.gif" alt="Sim"></img>
                      </div>
                    </div>
                    <div class="gif-container">
                        <div class="gif-item">
                          {/* <div class="gif-title">Latent Predictions</div> */}
                          <img src="GIFs/Behaviors/BlockPush_01/pred_GIF_frames.gif" alt="Pred"></img>
                        </div>
                        <div class="gif-item">
                          {/* <div class="gif-title">Predicted Slot Masks</div> */}
                          <img src="GIFs/Behaviors/BlockPush_01/masks_GIF_masks.gif" alt="Masks"></img>
                        </div>
                        <div class="gif-item">
                          {/* <div class="gif-title">Simulated Execution</div> */}
                          <img src="GIFs/Behaviors/BlockPush_01/sim_GIF_frames.gif" alt="Sim"></img>
                      </div>
                    </div>
                    <div class="gif-container">
                        <div class="gif-item">
                          {/* <div class="gif-title">Latent Predictions</div> */}
                          <img src="GIFs/Behaviors/BlockPush_02/pred_GIF_frames.gif" alt="Pred"></img>
                        </div>
                        <div class="gif-item">
                          {/* <div class="gif-title">Predicted Slot Masks</div> */}
                          <img src="GIFs/Behaviors/BlockPush_02/masks_GIF_masks.gif" alt="Masks"></img>
                        </div>
                        <div class="gif-item">
                          {/* <div class="gif-title">Simulated Execution</div> */}
                          <img src="GIFs/Behaviors/BlockPush_02/sim_GIF_frames.gif" alt="Sim"></img>
                      </div>
                    </div>


                    <Citation/>


                    </Article>

                <Footer
                    githubUrl="https://github.com/angelvillar96"
                    googleScholarUrl="https://scholar.google.com/citations?user=NCUoKLMAAAAJ&hl=en"
                    linkedInUrl="http://angelvillarcorrales.com/templates/home.php"
                />
            </main>
        </div>
    );
};

export default IndexPage;
