import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import DialogueGraphVisualizer from '@/components/DialogueGraphVisualizer'
import VoronoiVisualizer from '@/components/VoronoiVisualizer'
import Playground from '@/components/Playground'
import AltGame from '@/components/AlternateHUD/AltGame'
Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/playground',
			name: 'Rotten Soup - Playground',
			component: Playground
		},
		{
			path: '/hud',
			name: 'Rotten Soup - HUD',
			component: AltGame
		},
		{
			path: '/graphvis',
			name: 'Rotten Soup - Dialogue Visualizer',
			component: DialogueGraphVisualizer
		},
		{
			path: '*',
			name: 'Rotten Soup',
			component: Game
		},
		{
			path: '/voronoi',
			component: VoronoiVisualizer
		}
	]
})

export default router
