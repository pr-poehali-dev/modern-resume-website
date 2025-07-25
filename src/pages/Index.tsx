import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">Портфолио</div>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">Обо мне</a>
            <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Навыки</a>
            <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Опыт</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 flex items-center justify-center">
            <Icon name="Code" size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Разработчик ПО
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Специализируюсь на разработке веб-приложений, системном администрировании
            и работе с embedded системами. Более 5 лет опыта в Python, Linux и сетевых технологиях.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать резюме
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Увлеченный разработчик с глубокими знаниями в области системного программирования 
                и веб-технологий. Работаю с современными стеками технологий и имею опыт в создании 
                масштабируемых решений.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Специализируюсь на автоматизации процессов, создании monitoring систем 
                и интеграции различных платформ. Опыт работы с embedded системами и IoT.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Icon name="Calendar" size={32} className="mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-slate-800">5+ лет</h3>
                <p className="text-slate-600">Опыта</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Code2" size={32} className="mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold text-slate-800">50+</h3>
                <p className="text-slate-600">Проектов</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Users" size={32} className="mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-slate-800">10+</h3>
                <p className="text-slate-600">Клиентов</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Award" size={32} className="mx-auto mb-4 text-orange-600" />
                <h3 className="font-semibold text-slate-800">100%</h3>
                <p className="text-slate-600">Успех</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Навыки и технологии</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Backend */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Server" size={24} className="text-blue-600" />
                    Backend разработка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">asyncio</Badge>
                    <Badge variant="secondary">WebSocket</Badge>
                    <Badge variant="secondary">JSON</Badge>
                    <Badge variant="secondary">MariaDB</Badge>
                    <Badge variant="secondary">SQLite</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Systems */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Settings" size={24} className="text-green-600" />
                    Системное администрирование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Linux</Badge>
                    <Badge variant="secondary">VPN</Badge>
                    <Badge variant="secondary">Сети</Badge>
                    <Badge variant="secondary">Маршруты</Badge>
                    <Badge variant="secondary">RS-485</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Data & Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart3" size={24} className="text-purple-600" />
                    Данные и аналитика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Pandas</Badge>
                    <Badge variant="secondary">Plotly</Badge>
                    <Badge variant="secondary">Streamlit</Badge>
                    <Badge variant="secondary">YOLO</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Опыт работы</h2>
          
          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Создание систем мониторинга для сети ЭЗС
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Разработка комплексной системы мониторинга электрозаправочных станций 
                    с использованием баз данных MariaDB и SQLite, визуализация данных через Pandas и Plotly.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>MariaDB</Badge>
                    <Badge>Streamlit</Badge>
                    <Badge>Monitoring</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Автоматизация процессов обновления ПО
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Разработка системы автоматического обновления и настройки программного обеспечения 
                    для электрозаправочных станций с использованием Linux-серверов.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Linux</Badge>
                    <Badge>Automation</Badge>
                    <Badge>DevOps</Badge>
                    <Badge>Shell Scripting</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Icon name="Eye" size={24} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Обучение моделей компьютерного зрения (YOLO)
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Создание и обучение моделей детекции объектов для применения 
                    в системах видеонаблюдения электрозаправочных станций.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>YOLO</Badge>
                    <Badge>Computer Vision</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>OpenCV</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Icon name="Cpu" size={24} className="text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Работа с embedded системами (OrangePi)
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Разработка и настройка embedded решений на базе OrangePi 
                    для интеграции с промышленным оборудованием по протоколу RS-485.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>OrangePi</Badge>
                    <Badge>Embedded Linux</Badge>
                    <Badge>RS-485</Badge>
                    <Badge>IoT</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Свяжитесь со мной</h2>
            <p className="text-xl text-slate-300 mb-12">
              Готов обсудить ваш проект и предложить эффективные решения
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-slate-800 border-slate-700 p-6">
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-blue-400" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-300">your.email@example.com</p>
              </Card>
              
              <Card className="bg-slate-800 border-slate-700 p-6">
                <Icon name="Phone" size={32} className="mx-auto mb-4 text-green-400" />
                <h3 className="font-semibold text-white mb-2">Телефон</h3>
                <p className="text-slate-300">+7 (XXX) XXX-XX-XX</p>
              </Card>
              
              <Card className="bg-slate-800 border-slate-700 p-6">
                <Icon name="MapPin" size={32} className="mx-auto mb-4 text-purple-400" />
                <h3 className="font-semibold text-white mb-2">Локация</h3>
                <p className="text-slate-300">Россия</p>
              </Card>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" size={20} className="mr-2" />
                Написать сообщение
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
                <Icon name="Github" size={20} className="mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Портфолио разработчика. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;