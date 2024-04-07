import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()
KEY = os.environ.get('KEY')
genai.configure(api_key=KEY)

model = genai.GenerativeModel('gemini-pro')
response = model.generate_content('Given the following transcript make 10 flashcards. Return these in JSON format. Don\'t output anything besides the JSON. Here is the transcript' + """ in this video we are going to do math
 specifically we are going to do a type of math called topology and I'm going to give you a five minute coarsened apology
 now you might be asking what's apology is and it turns out to be really simple topology is just the study of how topological spaces on their properties are preserved under homeomorphism if you'd like to learn more you can buy the companion text book that I wrote for this course which is available at all major academic book stores
 here on this slide you can see a bunch of topological pictures including a nod a Mobius strip and a coffee mug turning into a donut
 these images make topology look way more fun and interesting than it actually is I will not be referring to these images again at any point during the course
 now before we begin the course I think it's very important to establish why we would want to study topology and what the point of all this is
 well as we all know topological spaces are transformed using continuous mass and of course continuous maps are arrows in the category of topological spaces and we know that we need arrows to understand functors and of course when you talk to her is to understand natural Transformations and we need natural transformations in order to understand dad's joint doctors
 so as you can see topology of the number of practical applications now that were properly motivated let's begin the course
 definition 1.10 topology t on ex is a family of such an act such that the empty set is in TX is in tea the possibly internet Union of any sense into using tea and the finite intersection of any certainty is in tea
 you're 1.2 a subset Q of the real numbers is open in the euclidean topology if and only if it is a union of open intervals and we can see the definition of euclidean ecology here
 proof for the proof exercise 1.3
 exercise 1.3 proof theorem 1.2
 definition 1.4 let X be a set with a topology t a subset P of X is closed if it's compliment X - P also written pea-souper skripsi is open in tea
 definition 1.5 the closure P bar of a settee is the union of p and all its limit points were a limited point of asset Jay is a point where I where every neighborhood of why contains the point in Jay different than white self
 dear 1.6 the closure of a set is closed
 for this proof will denote open sets by the letter c will denote ordinary sets by the letter P and will denote points by the Greek letter capital r o
 suppose that Roe is not in T Bar then there exists a cero such that Rose and Ciro and Ciro intersex p is the empty said clearly PRC is the union of says cero such that Rose in PRC since the union therefore P bar is closed this completes the proof
 If you find this prove confusing please look at this easy to understand diagram
 definition 1.7 compactness now I'd like to emphasize that this definition is very very important I would even say that if you don't understand compactness then you don't understand apology the topological space access compact if every open cover has a finite subcover    
 so please make sure you understand this definition
 your 1.8 the I need a real serum the honey Burrell theorem states that every clothes battered subset of our and is compact
 proof start by taking a close bounded subset pnrn the fact that P is compact Pollos Trivoli from the fact that he is close to bounded this completes the proof
 are in 1.9 the pointer a conjecture the blank are a conjecture states that every Simply Connected clothes 3 manifold is homeomorphic to the three spear
 proof this proof is left as an exercise to do your
 all right so if your 1.9 is a fun little problem that you can try and tackle on your evenings and weekends
 all right that's it and this completes my online course on topology graduations for finishing it
 now those of you who are in the topology class right now in school might have some additional questions
 you might be asking yourself why you're paying thousands of dollars to study things like open and closed sets that have no social value and contribute nothing to society
 this is a very important question and it's a question you'll be asking yourself everyday when you go to a magical place called graduate school""")

print(response.text)