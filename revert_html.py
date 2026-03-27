import codecs
import sys

def run():
    try:
        html = codecs.open('index.html', 'r', 'utf-8').read()
        
        # 1. Strip classes from index.html
        html = html.replace(' slide-left', '')
        html = html.replace(' slide-right', '')
        html = html.replace(' zoom-in', '')

        # 2. Revert Hero section layout in index.html
        old_hero = '''            <div class="container hero-content text-center">
                <p class="hero-subtitle hidden-onload" data-delay="200">Hello, I'm</p>
                <h1 class="hero-title hidden-onload" data-delay="300">Gaurav <span class="gradient-text">Kumar
                        Singh</span></h1>
                <h2 class="hero-role hidden-onload" data-delay="400">Developer Lead & UI Architect</h2>
                <p class="hero-desc hidden-onload" data-delay="500">Crafting high-performance digital products and
                    scalable systems using React, TypeScript, Java/Spring Boot, and GCP for over 13 years.</p>
                <div class="hero-ctas hidden-onload" data-delay="600">
                    <a href="#projects" class="btn btn-primary">View Work</a>
                    <a href="mailto:gaurav.kr.singh1@gmail.com" class="btn btn-secondary">Get in Touch</a>
                </div>
            </div>'''
        new_hero = '''            <div class="container hero-container">
                <div class="hero-content">
                    <p class="hero-subtitle hidden-onload" data-delay="200">Hello, I'm</p>
                    <h1 class="hero-title hidden-onload" data-delay="300">Gaurav <span class="gradient-text">Kumar
                            Singh</span></h1>
                    <h2 class="hero-role hidden-onload" data-delay="400">Developer Lead & UI Architect</h2>
                    <p class="hero-desc hidden-onload" data-delay="500">Crafting high-performance digital products and
                        scalable systems using React, TypeScript, Java/Spring Boot, and GCP for over 13 years.</p>
                    <div class="hero-ctas hidden-onload" data-delay="600">
                        <a href="#projects" class="btn btn-primary">View Work</a>
                        <a href="mailto:gaurav.kr.singh1@gmail.com" class="btn btn-secondary">Get in Touch</a>
                    </div>
                </div>
                <div class="hero-canvas-container hidden-onload" data-delay="700" id="canvas-container">
                    <!-- Three.js will inject canvas here -->
                </div>
            </div>'''
        html = html.replace(old_hero, new_hero)

        # 3. Revert Skills layout in index.html
        old_skills_start = '''                <div class="skills-layout-container">
                    <div class="skills-grid fade-in">'''
        new_skills_start = '''                <div class="skills-grid">'''
        html = html.replace(old_skills_start, new_skills_start)

        old_skills_end = '''                    </div>
                </div> <!-- Closes skills-grid -->
                <div class="skills-canvas-container fade-in" id="canvas-container">
                    <!-- Three.js will inject canvas here -->
                </div>
            </div> <!-- Closes skills-layout-container -->'''
        new_skills_end = '''                    </div>'''
        html = html.replace(old_skills_end, new_skills_end)

        codecs.open('index.html', 'w', 'utf-8').write(html)
        print("Done replacing html.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    run()
