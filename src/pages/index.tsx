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


                    <Heading> Qualitative Evaluation </Heading>

                    <div>
                      TextOCVP generates, given a single reference frame and a text caption, a sequence that closely aligns to the ground-truth.
                      We observe that TextOCVP maintains sharp object representations and correctly models the dynamics and interactions between the robot and the objects.
                      In contrasts, the baseline model features multiple errors and artifacts, such as missing objects or blurry contours.

                    </div>

                    <div class="image-container">
                        <img src="imgs/qual_imgs/qual_cater.png" alt="qual_01" class="qual_00"></img>
                        <img src="imgs/qual_imgs/qual_cliport.png" alt="qual_02" class="qual_01"></img>
                    </div>


                    <br></br>
                    <br></br>
                    <p class="subtitle"> CATER Qualitative Evaluation </p>


                    <div class="gif-container">
                        <p class="git-title-main">
                          <code>
                            the <span style={{color: 'green',fontWeight: 800}}>medium green metal sphere</span> is sliding to (2, 1).
                            the <span style={{color: 'brown',fontWeight: 800}}>small brown metal cube</span> is picked up and placed to (-3, 1).
                          </code>
                        </p>
                        <div class="gif-items">
                          <div class="gif-item">
                            <div class="gif-title">GT</div>
                            <img src="GIFs/Qual_Comp/cater_1/gt_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">MAGE Baseline</div>
                            <img src="GIFs/Qual_Comp/cater_1/MAGE_pred.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                              <div class="gif-title">TextOCVP (ours)</div>
                              <img src="GIFs/Qual_Comp/cater_1/TextOCVP_pred_GIF_frames.gif" alt=""></img>
                          </div>
                      </div>
                    </div>

                    <div class="gif-container">
                        <p class="git-title-main">
                          <code>
                            the <span style={{color: 'gold',fontWeight: 800}}>large yellow rubber cone</span> is sliding to (2, 3).
                            the <span style={{color: 'orange',fontWeight: 800}}>small gold metal snitch</span> is picked up and placed to (-3, 1).
                          </code>
                        </p>
                        <div class="gif-items">
                          <div class="gif-item">
                            <div class="gif-title">GT</div>
                            <img src="GIFs/Qual_Comp/cater_2/gt_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">MAGE Baseline</div>
                            <img src="GIFs/Qual_Comp/cater_2/MAGE_pred.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                              <div class="gif-title">TextOCVP (ours)</div>
                              <img src="GIFs/Qual_Comp/cater_2/TextOCVP_pred_GIF_frames.gif" alt=""></img>
                          </div>
                      </div>
                    </div>


                    <div class="gif-container">
                        <p class="git-title-main">
                          <code>
                            the <span style={{color: 'green',fontWeight: 800}}>medium green rubber cone</span> is picked up and containing the small gold metal snitch.
                            the <span style={{color: 'purple',fontWeight: 800}}>large purple rubber cone</span> is picked up and placed to (-1, 3).
                          </code>
                        </p>
                        <div class="gif-items">
                          <div class="gif-item">
                            <div class="gif-title">GT</div>
                            <img src="GIFs/Qual_Comp/cater_3/gt_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">MAGE Baseline</div>
                            <img src="GIFs/Qual_Comp/cater_3/MAGE_pred.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                              <div class="gif-title">TextOCVP (ours)</div>
                              <img src="GIFs/Qual_Comp/cater_3/TextOCVP_pred_GIF_frames.gif" alt=""></img>
                          </div>
                      </div>
                    </div>


                    <br></br>
                    <br></br>
                    <p class="subtitle"> CLIPort Qualitative Evaluation </p>

                    <div class="gif-container">
                        <p class="git-title-main">
                          <code>
                            put the <span style={{color: 'gray',fontWeight: 800}}>gray block</span> in
                            the <span style={{color: 'brown',fontWeight: 800}}>brwons bowl</span>.
                          </code>
                        </p>
                        <div class="gif-items">
                          <div class="gif-item">
                            <div class="gif-title">GT</div>
                            <img src="GIFs/Qual_Comp/cliport_1/gt_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">MAGE-Dino Baseline</div>
                            <img src="GIFs/Qual_Comp/cliport_1/MAGE_pred.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                              <div class="gif-title">TextOCVP (ours)</div>
                              <img src="GIFs/Qual_Comp/cliport_1/TextOCVP_pred_GIF_frames.gif" alt=""></img>
                          </div>
                      </div>
                    </div>


                    <div class="gif-container">
                        <p class="git-title-main">
                          <code>
                            put the <span style={{color: 'gray',fontWeight: 800}}>gray block</span> in
                            the <span style={{color: 'brown',fontWeight: 800}}>brown bowl</span>.
                          </code>
                        </p>
                        <div class="gif-items">
                          <div class="gif-item">
                            <div class="gif-title">GT</div>
                            <img src="GIFs/Qual_Comp/cliport_2/gt_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">MAGE-Dino Baseline</div>
                            <img src="GIFs/Qual_Comp/cliport_2/MAGE_pred.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                              <div class="gif-title">TextOCVP (ours)</div>
                              <img src="GIFs/Qual_Comp/cliport_2/TextOCVP_pred_GIF_frames.gif" alt=""></img>
                          </div>
                      </div>
                    </div>


                    <div class="gif-container">
                        <p class="git-title-main">
                          <code>
                            put the <span style={{color: 'gray',fontWeight: 800}}>gray block</span> in
                            the <span style={{color: 'brown',fontWeight: 800}}>brown bowl</span>.
                          </code>
                        </p>
                        <div class="gif-items">
                          <div class="gif-item">
                            <div class="gif-title">GT</div>
                            <img src="GIFs/Qual_Comp/cliport_3/gt_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">MAGE-Dino Baseline</div>
                            <img src="GIFs/Qual_Comp/cliport_3/MAGE_pred.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                              <div class="gif-title">TextOCVP (ours)</div>
                              <img src="GIFs/Qual_Comp/cliport_3/TextOCVP_pred_GIF_frames.gif" alt=""></img>
                          </div>
                      </div>
                    </div>




                    <Heading> Object-Centric Video Prediction </Heading>

                    TextOCVP represents each object in its corresponding object slot, learning accurate and interpretable object representations.


                    <div class="gif-container">
                        <p class="git-title-main">
                          <code>
                            the <span style={{color: 'brown',fontWeight: 800}}>medium brown rubber cone</span> is picked up and containing the small gold metal snitch.
                            the <span style={{color: 'gray',fontWeight: 800}}>medium gray metal cube</span> is rotating.
                          </code>
                        </p>
                        <div class="gif-items">
                          <div class="gif-item">
                            <div class="gif-title">GT</div>
                            <img src="GIFs/Objs/Seq_00/gt_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">Preds</div>
                            <img src="GIFs/Objs/Seq_00/pred_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                              <div class="gif-title">Obj 1.</div>
                              <img src="GIFs/Objs/Seq_00/gt_obj_1.gif" alt=""></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">Obj 2.</div>
                            <img src="GIFs/Objs/Seq_00/gt_obj_2.gif" alt=""></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">Obj 3.</div>
                            <img src="GIFs/Objs/Seq_00/gt_obj_4.gif" alt=""></img>
                          </div>
                        <div class="gif-item">
                          <div class="gif-title">Obj 4.</div>
                          <img src="GIFs/Objs/Seq_00/gt_obj_5.gif" alt=""></img>
                        </div>
                      </div>
                    </div>


                    <div class="gif-container">
                        <p class="git-title-main">
                          <code>
                            the <span style={{color: 'blue',fontWeight: 800}}>large blue metal cone</span> is picked up and containing the small yellow rubber cone.
                            the <span style={{color: 'green',fontWeight: 800}}>medium green metal cylinder </span>
                            is sliding to (-1, 1).
                          </code>
                        </p>
                        <div class="gif-items">
                          <div class="gif-item">
                            <div class="gif-title">GT</div>
                            <img src="GIFs/Objs/Seq_02/gt_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">Preds</div>
                            <img src="GIFs/Objs/Seq_02/pred_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                              <div class="gif-title">Obj 1.</div>
                              <img src="GIFs/Objs/Seq_02/gt_obj_3.gif" alt=""></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">Obj 2.</div>
                            <img src="GIFs/Objs/Seq_02/gt_obj_4.gif" alt=""></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">Obj 3.</div>
                            <img src="GIFs/Objs/Seq_02/gt_obj_5.gif" alt=""></img>
                          </div>
                        <div class="gif-item">
                          <div class="gif-title">Obj 4.</div>
                          <img src="GIFs/Objs/Seq_02/gt_obj_6.gif" alt=""></img>
                        </div>
                      </div>
                    </div>


                    <div class="gif-container">
                        <p class="git-title-main">
                          <code>
                            the <span style={{color: 'brown',fontWeight: 800}}>medium brown metal cone</span> is picked up and placed to (-3, -3).
                            the <span style={{color: 'brown',fontWeight: 800}}>large brown metal cone</span> is picked up and containing the small gold metal snitch.
                          </code>
                        </p>
                        <div class="gif-items">
                          <div class="gif-item">
                            <div class="gif-title">GT</div>
                            <img src="GIFs/Objs/Seq_01/gt_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">Preds</div>
                            <img src="GIFs/Objs/Seq_01/pred_GIF_frames.gif" alt="GT"></img>
                          </div>
                          <div class="gif-item">
                              <div class="gif-title">Obj 1.</div>
                              <img src="GIFs/Objs/Seq_01/gt_obj_3.gif" alt=""></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">Obj 2.</div>
                            <img src="GIFs/Objs/Seq_01/gt_obj_4.gif" alt=""></img>
                          </div>
                          <div class="gif-item">
                            <div class="gif-title">Obj 3.</div>
                            <img src="GIFs/Objs/Seq_01/gt_obj_6.gif" alt=""></img>
                          </div>
                        <div class="gif-item">
                          <div class="gif-title">Obj 4.</div>
                          <img src="GIFs/Objs/Seq_01/gt_obj_8.gif" alt=""></img>
                        </div>
                      </div>
                    </div>



                    <Heading> Controllability </Heading>

                    We demonstrate that TextOCVP can generate multiple possible sequence continuations conditioned
                    on a single reference frame and different captions.

                    <br></br>
                    <p class="subtitle"> Controllability on CATER </p>
                    <br></br>


                    <div class="control-gifs">
                      <div class="control-item">
                          <div class="control-title-caption">
                            <div class="control-title">Original Caption</div>
                            <div class="control-caption">
                              <code>
                                the <span style={{color: 'purple',fontWeight: 800}}>large purple rubber cone</span> is picked up and placed to (2, 3).
                                the <span style={{color: 'orange',fontWeight: 800}}>small gold metal snitch </span>
                                is picked up and placed to (-1, 1).
                              </code>
                            </div>
                          </div>
                          <img src="GIFs/Control_CATER/seq_5_FirstCaption.gif" alt="GIF 1"></img>
                      </div>
                      <div class="control-item">
                          <div class="control-title-caption">
                            <div class="control-title">Changed Actions</div>
                            <div class="control-caption">
                              <code>
                                the <span style={{color: 'purple',fontWeight: 800}}>large purple rubber cone</span> is sliding to ( -1 , -3 ) .
                                the <span style={{color: 'orange',fontWeight: 800}}>small gold metal snitch </span>
                                is rotating .
                              </code>
                            </div>
                          </div>
                          <img src="GIFs/Control_CATER/seq_5_SecondCaption_actionChanged.gif" alt="GIF 4"></img>
                      </div>
                      <div class="control-item">
                          <div class="control-title-caption">
                            <div class="control-title">Changed Moving Objects and Actions</div>
                            <div class="control-caption">
                              <code>
                                the <span style={{color: 'cyan',fontWeight: 800}}>medium cyan rubber sphere</span> is picked up and placed to ( -2 , -2 ) .
                                the <span style={{color: 'purple',fontWeight: 800}}> medium purple metal cone </span>
                                is sliding to ( 2 , 3 ) .
                              </code>
                            </div>
                          </div>
                          <img src="GIFs/Control_CATER/seq_5_SecondCaption_objectChanged.gif" alt="GIF 5"></img>
                      </div>
                      <div class="control-item">
                          <div class="control-title-caption">
                            <div class="control-title">Single Action in Caption</div>
                            <div class="control-caption">
                              <code>
                                the <span style={{color: 'purple',fontWeight: 800}}>medium purple metal cone</span> is picked up and placed to ( -2 , -3 ) .
                              </code>
                            </div>
                          </div>
                          <img src="GIFs/Control_CATER/seq_5_SecondCaption_1prompt.gif" alt="GIF 2"></img>
                      </div>
                      <div class="control-item">
                          <div class="control-title-caption">
                            <div class="control-title">Three Distinct Actions in Caption</div>
                            <div class="control-caption">
                              <code>
                                the <span style={{color: 'purple',fontWeight: 800}}>large purple rubber cone</span> is sliding to ( -1 , 1 ) .
                                the <span style={{color: 'orange',fontWeight: 800}}> small gold metal snitch </span>
                                is rotating .
                                the <span style={{color: 'purple',fontWeight: 800}}> medium purple metal cone </span>
                                is picked up and placed to ( -1 , -3 ) .
                              </code>
                            </div>
                          </div>
                          <img src="GIFs/Control_CATER/seq_5_SecondCaption_3prompts.gif" alt="GIF 3"></img>
                      </div>
                    </div>


                    <br></br>
                    <p class="subtitle"> Controllability on CLIPort </p>
                    <br></br>

                    <div class="cliport-control-title"> Changing the Target Bowl</div>
                    <div class="cliport-control-gifs">
                      <div class="cliport-control-item">
                          <div class="cliport-control-caption">
                            <code>
                              put the <span style={{color: 'green',fontWeight: 800}}>green block </span>
                              in the <span style={{color: 'cyan',fontWeight: 800}}>cyan bowl</span>.
                            </code>
                          </div>
                          <img src="GIFs/Control_Cliport/seq_0/pred_1.gif" alt="GIF 1"></img>
                      </div>
                      <div class="cliport-control-item">
                        <div class="cliport-control-caption">
                          <code>
                            put the <span style={{color: 'green',fontWeight: 800}}>green block </span>
                            in the <span style={{color: 'red',fontWeight: 800}}>red bowl</span>.
                          </code>
                        </div>
                          <img src="GIFs/Control_Cliport/seq_0/pred_2.gif" alt="GIF 2"></img>
                      </div>
                    </div>


                    <div class="cliport-control-title"> Changing the Picked Block</div>
                    <div class="cliport-control-gifs">
                      <div class="cliport-control-item">
                          <div class="cliport-control-caption">
                            <code>
                              put the <span style={{color: 'cyan',fontWeight: 800}}>cyan block </span>
                              in the <span style={{color: 'brown',fontWeight: 800}}>brown bowl</span>.
                            </code>
                          </div>
                          <img src="GIFs/Control_Cliport/seq_1/pred_1.gif" alt="GIF 1"></img>
                      </div>
                      <div class="cliport-control-item">
                        <div class="cliport-control-caption">
                          <code>
                            put the <span style={{color: 'blue',fontWeight: 800}}>blue block </span>
                            in the <span style={{color: 'brown',fontWeight: 800}}>brown bowl</span>.
                          </code>
                        </div>
                          <img src="GIFs/Control_Cliport/seq_1/pred_2.gif" alt="GIF 2"></img>
                      </div>
                    </div>


                    <br></br>


                    <Heading> Text-to-Slot Attention </Heading>

                    <p>An additional advantage of using object-centric representations is the improved
                    interpretability.
                    This can be shown in the text-to slot attention weights, which help us understand how the textual information influences and guides the model predictions.</p>

                    <p>First, we visualize the text-to-slot attention weights for different cross-attention heads for a single object.
                    We observe that the slot representing the rotating cube attends to relevant text-tokens from the input, such as the object shape, size and the action taking place.</p>

                    <div class="att_img">
                      <img src="imgs/text_to_slot/tts_1.png" alt="tts 1"></img>
                    </div>


                    <br></br>
                    We additionally  visaulze the Text-to-Slot attention weights, averaged across attention heads, for different objects in a CATER sequence.

                    We observe that slots that represent objects in the textual description attend to relevant text tokens, such as their target coordinate locations.


                    <div class="att_img">
                      <img src="imgs/text_to_slot/tts_2.png" alt="tts 2"></img>
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
