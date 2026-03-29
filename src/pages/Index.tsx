import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { DemoSection } from "@/components/demo-section"
import { FeaturesSection } from "@/components/features-section"
import { CasesSection } from "@/components/cases-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { AboutProjectSection } from "@/components/about-project-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        {/* Блок 1: Hero */}
        <Hero3D />
        {/* Блок 2: Проблема */}
        <ProblemSection />
        {/* Блок 3: Решение */}
        <SolutionSection />
        {/* Блок 4: Демонстрация платформы */}
        <DemoSection />
        {/* Блок 5: Ключевые возможности */}
        <FeaturesSection />
        {/* Блок 6: Кейсы */}
        <CasesSection />
        {/* Блок 7: Применение / выгода */}
        <BenefitsSection />
        {/* Блок 8: Сравнение */}
        <ComparisonSection />
        {/* Форматы контента (timeline) */}
        <ApplicationsTimeline />
        {/* Блок 9: О проекте */}
        <AboutProjectSection />
        {/* Отзывы */}
        <TestimonialsSection />
        {/* Блок 10: FAQ */}
        <FAQSection />
        {/* Блок 11: Финальный CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
